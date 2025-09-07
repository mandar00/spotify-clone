import mongoose from "mongoose";

const albumSchema = new mongoose.Schema({
   title:{type:String,requried:true},
   artist:{type:String,requried:true},
   imgUrl:{type:String,requried:true},
   releaseYear:{type:String,requried:true},
songs:[{type:mongoose.Schema.Types.ObjectId,ref :"Songs"}]
},{timestamps:true})

export const Album = mongoose.model("album",albumSchema)