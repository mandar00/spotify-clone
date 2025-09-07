import { Router } from "express";
const router = Router()
import { authCallback } from "../controller/auth.controller";
import { protectRoute, requireAdmin } from "../middleware/auth.middleware";
import { clerkMiddleware } from "@clerk/express";



router.post("/callback",authCallback)
router.get("/createSong", protectRoute ,requireAdmin,authCallback)


export default router