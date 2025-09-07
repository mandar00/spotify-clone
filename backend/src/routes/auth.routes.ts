import { Router } from "express";
const router = Router()
import { authCallback } from "../controller/auth.controller";


router.post("/callback",authCallback)


export default router