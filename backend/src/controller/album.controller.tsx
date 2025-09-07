import type { NextFunction } from "express"
import { Album } from "../models/album.models"

export const getAllAlbums = async(req:any,res:any,next:NextFunction)=>{
  try {
    const albums = await Album.find()
  res.status(200).json({success:true,albums})
  } catch (error) {
    console.log("error in getting all albums",error);
    next(error)
  }

}

export const getAlbumById = async(req:any,res:any,next:NextFunction)=>{
  try {
    const {id} = req.params
    const album = await Album.findById(id).populate("songs")// get the details of songs using ids form songs tables instead of ids
    if(!album){
      res.status(404).json({success:false,message:"Album not found"})
    }
    res.status(200).json({success:true,album})
  } catch (error) {
    console.log("error in getting album by id",error);
    next(error)
  }
}