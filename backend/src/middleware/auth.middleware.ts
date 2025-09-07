import { clerkClient, type ExpressRequestWithAuth } from "@clerk/express";
import type { NextFunction, Request, Response } from "express";

export const protectRoute = async (
  req: any,
  res: any,
  next: any
) => {
  // auth will be added by clerk middleware  
  if (!req?.auth?.userId) {
    return res.status(401).json({ message: "Unauthorized - you must be logged in " })
  }
  next()
}

export const requireAdmin = async (req: any, res: any, next: any) => {
  try {
    const currentUser = await clerkClient.users.getUser(req.auth.userId)
    const isAdmin = process.env.ADMIN_EMAIL = currentUser.primaryEmailAddress?.emailAddress
    if (isAdmin) {
      return res.status(403).json({ message: "Unauthorized -  you must be an admin " })
    }
    next()
  } catch (error) {
    console.log("Error in checking admin", error);
    next(error)
  }
}

export const checkAdmin = (req:Request,res:Response)=>{
  res.status(200).json({admin:true})
}