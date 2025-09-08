import { Router } from "express";
const router = Router()
import type { Request, Response } from "express";
import { protectRoute } from "../middleware/auth.middleware";
import {getAllUsers} from "../controller/user.controller"

router.get("/", protectRoute,getAllUsers)


export default router