import { Router } from "express";
const router = Router()
import {getStats} from "../controller/stats.controller"
import { protectRoute, requireAdmin } from "../middleware/auth.middleware";

router.get("/",protectRoute,requireAdmin, getStats )


export default router