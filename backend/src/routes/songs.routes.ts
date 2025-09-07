import { Router } from "express";
const router = Router()
import type { Request, Response } from "express";
import {getAllFeaturedSongs, getAllSongs, getMadeForYouSongs, getTrendingSongs} from "../controller/songs.controller"
import { protectRoute, requireAdmin } from "../middleware/auth.middleware";

router.get("/",protectRoute,requireAdmin, getAllSongs)
router.get("/featured",protectRoute,requireAdmin, getAllFeaturedSongs)
router.get("/made-for-you",protectRoute,requireAdmin, getMadeForYouSongs)
router.get("/trending",protectRoute,requireAdmin, getTrendingSongs)


export default router