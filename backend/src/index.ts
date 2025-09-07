import express, { type NextFunction, type Request, type Response } from "express";
import useRoutes from "./routes/user.routes"
import adminRoutes from "./routes/admin.routes"
import authRoutes from "./routes/auth.routes"
import songsRoutes from "./routes/songs.routes"
import albumsRoutes from "./routes/albums.routes"
import statsRoutes from "./routes/stats.routes"
import dotenv from "dotenv"
import { connectDb } from "./lib/db";
import { clerkMiddleware } from "@clerk/express";
import fileUpload from "express-fileupload";
import path from "path"
import type { Error } from "mongoose";
dotenv.config()

const app = express();

app.use("/api/users", useRoutes)
app.use("/api/admin", adminRoutes)
app.use("/api/auth", authRoutes)
app.use("/api/songs", songsRoutes)
app.use("/api/album", albumsRoutes)
app.use("/api/stats", statsRoutes)

const __dirname = path.resolve() // to get current directory path : gives out /Users/mandarsakpal/codes/personal/spotify-clone/backend

app.use(express.json()) // to parse req.body
app.use(clerkMiddleware())// this will add auth to request obj 
app.use(fileUpload({
  useTempFiles:true,// store files in temp folder rather than memory
  tempFileDir:path.join(__dirname,'../temp'), // create temp folder in backend directory,
  createParentPath:true, // create temp folder if not exists,
  limits:{
    fileSize: 10 * 1024 * 1024 // 10mb max file size
  }
}))

app.use((err: Error, req: Request, res: Response, next: NextFunction)=>{
  if(err){
    return res.status(500).json({ success: false, message: process.env.NODE_ENV === 'production'? "Internal Server Error": err.message })
  }
})// global error handler
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log('server running on ' + PORT);  
  connectDb()
})
export default app;