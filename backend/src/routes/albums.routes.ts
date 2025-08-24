import { Router } from "express";
const router = Router()
import type { Request, Response } from "express";

router.get("/", (req: Request, res: Response) => {
  res.send("albums route")
})


export default router