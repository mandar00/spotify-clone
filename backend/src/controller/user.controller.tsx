import type{ NextFunction } from "express";
import { User } from "../models/user.models";

export const getAllUsers = async (req: any, res: any,next:NextFunction) =>{
  try {
    const currentUserId = req.auth.userId
    const users = await User.find({clerkId:{$ne:currentUserId}})
    res.status(200).json({success:true,users})
  } catch (error) {
    console.log("Error in getting all users", error);
    next(error)
  }
}