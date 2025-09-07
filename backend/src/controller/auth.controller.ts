import type { NextFunction, Request, Response } from "express";
import { User } from "../models/user.models";

export const authCallback = async (req: Request, res: Response,next:NextFunction) => {
  try {
    const { id, firstName, lastName, imgUrl } = req.body
    // check if user already exists
    const user = await User.findOne({ clerkId: id })

    if (!user) {
      await User.create({
        clerkId: id,
        imgUrl,
        fullName: `${firstName} ${lastName}`
      })
    }
    res.status(200).json({ success: true })
  } catch (error) {
    console.log('Error in auth callback', error);
    next(error)
  }
} 