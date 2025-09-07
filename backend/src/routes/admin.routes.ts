import { Router } from "express";
const router = Router()
import { checkAdmin, protectRoute, requireAdmin } from "../middleware/auth.middleware";
import { createAlbum, createSong, deleteAlbum, deleteSong } from "../controller/admin.controller";


router.use(protectRoute, requireAdmin) // adds protectedRoute and requireAdmin middleware for all the routes in admin 
router.get("/check", checkAdmin)

router.get("/createSong", createSong)
router.delete("/song/:id", deleteSong)

router.get("/Albums", createAlbum)
router.delete("/delete/:id", deleteAlbum)

export default router