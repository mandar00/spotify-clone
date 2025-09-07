import { Songs } from "../models/songs.models";
import { Album } from "../models/album.models";
import type { NextFunction, Response } from "express";
import {uploadToCloudinary} from "../helper/cloudinaryHelper"
export const createSong = async (req: any, res: any,next:NextFunction) => {
  try {
    if (!req.files || !req.files.songFile || !req.files.imgFile) {
      return res
        .status(400)
        .json({ success: false, message: "Files not uploaded" });
    }
    const { title, artist, albumId, duration } = req.body;
    if (!title || !artist || !duration) {
      return res
        .status(400)
        .json({ success: false, message: "Missing required fields" });
    }
    // upload files to cloudinary
    const songFile = req.files.songFile;
    const imgFile = req.files.imgFile;
    const audioUrl = await uploadToCloudinary(songFile)
    const imgUrl = await uploadToCloudinary(imgFile)
    const song = new Songs({
      title,
      artist,
      audioUrl,
      imgUrl,
      duration,
      albumId: albumId || null, // a song may or may not be related to album 
    });

    await song.save();

    // if song belongs to album update the albums songs array
    if(albumId){
      await Album.findByIdAndUpdate(albumId,{
        $push:{
          songs:song._id
        }
      })
    }

    res.status(201).json({ success: true, song });
  } catch (error) {
    console.log("Error in creating song", error);
    next(error)
  }
};


export const deleteSong = async(req:any,res:Response,next:NextFunction)=>{
  try {
    const {id} = req.params
     const song = await Songs.findByIdAndDelete(id)
     //if song belongs to any album delete that song from the album first 
     if(song?.albumId){
        await Album.findByIdAndUpdate(song.albumId,{$pull:{songs:song._id}})
     }
     if(song){
       await Songs.findByIdAndDelete(id)
     }

     res.status(200).json({success:true,message:"song deleted successfully"})
  } catch (error) {
    console.log("Error in Deleting song", error);
    next(error)
  }
}


export const createAlbum = async (req: any, res: any, next:NextFunction) => {
  try {
    const {title,artist,releaseYear} = req.body
    const {imageFile} = req.files
    const imgUrl = uploadToCloudinary(imageFile)
    const album = await new Album({
      title,
      artist,
      releaseYear,
      imgUrl
    })

    await album.save()
  } catch (error) {
    console.log("Error in creating album", error);
    next(error)
  }
}

export const deleteAlbum = async (req: any, res: any, next:NextFunction)=>{
  try {
    const {id}=req.params
    await Songs.updateMany({albumId:id},{albumId:null}) // for each song that belongs to this album set albumId to null
    await Album.findByIdAndDelete(id)

    res.status(200).json({success:true,message:"album deleted successfully"})
  } catch (error) {
    console.log("Album delete error", error);
    next(error)
  }
}