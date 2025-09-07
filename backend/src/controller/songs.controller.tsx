import type { NextFunction } from "express";
import {Songs} from "../models/songs.models"

export const getAllSongs=async(req: any, res: any,next:NextFunction)=>{
  try {
    // -1 descending 
    const songs = await Songs.find().sort({createdAt:-1})
    res.status(200).json({success:true,songs})
  } catch (error) {
    console.log("Error in getting all songs", error);
    next(error)
  }
}


export const getAllFeaturedSongs =async (req: any, res: any,next:NextFunction)=>{
  // TODO :add a get featured algorithm
  try {
    // fetch 6 random songs using mongoDb's aggregate pipeline 
    const songs = await Songs.aggregate([
      {
        $sample:{size:6}
      },
      {
        $project:{
          _id:1,
          title:1,
          artist:1,
          imgUrl:1,
          audioUrl:1
        }
      }
    ])
    res.status(200).json({success:true,songs})
  } catch (error) {
    console.log("Error in getting all featured songs", error);
    next(error)
  }
} 


export const getMadeForYouSongs = async (req: any, res: any,next:NextFunction) =>{
  // TODO :add a get made for you  algorithm
  try {
    // fetch 4 random songs using mongoDb's aggregate pipeline 
    const songs = await Songs.aggregate([
      {
        $sample:{size:4}
      },
      {
        $project:{
          _id:1,
          title:1,
          artist:1,
          imgUrl:1,
          audioUrl:1
        }
      }
    ])
    res.status(200).json({success:true,songs})
  } catch (error) {
    console.log("Error in getting all made for you songs", error);
    next(error)
  }
}


export const getTrendingSongs = async (req: any, res: any,next:NextFunction) =>{
  // TODO :add a get trending  algorithm
  try {
    // fetch 4 random songs using mongoDb's aggregate pipeline 
    const songs = await Songs.aggregate([
      {
        $sample:{size:4}
      },
      {
        $project:{
          _id:1,
          title:1,
          artist:1,
          imgUrl:1,
          audioUrl:1
        }
      }
    ])
    res.status(200).json({success:true,songs})
  } catch (error) {
    console.log("Error in getting all trending songs", error);
    next(error)
  }
}