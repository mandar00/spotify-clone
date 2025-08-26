import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    requried: true
  },
  imgUrl: {
    type: String,
    requried: true,
    unique: true
  },
  clerkId: {
    type: String,
    requried: true,
    unique: true
  }
}, { timestamps: true })

export const User = mongoose.model("User", userSchema) 