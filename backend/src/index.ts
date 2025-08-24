import express from "express";
import useRoutes from "./routes/user.routes"
import adminRoutes from "./routes/admin.routes"
import authRoutes from "./routes/auth.routes"
import songsRoutes from "./routes/songs.routes"
import albumsRoutes from "./routes/albums.routes"
import statsRoutes from "./routes/stats.routes"
import dotenv from "dotenv"
import { connectDb } from "./lib/db";

dotenv.config()

const app = express();
app.use("/api/users", useRoutes)
app.use("/api/admin", adminRoutes)
app.use("/api/auth", authRoutes)
app.use("/api/songs", songsRoutes)
app.use("/api/album", albumsRoutes)
app.use("/api/stats", statsRoutes)


const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log('server running on ' + PORT);
  connectDb()
})
export default app;