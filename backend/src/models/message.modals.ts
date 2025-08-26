import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
   senderId:{type:String,requried:true},
   receiverId:{type:String,requried:true},
   content:{type:String,requried:true},
},{timestamps:true})

export const Message = mongoose.model("message",messageSchema)