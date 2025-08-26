import mongoose, { mongo } from "mongoose";

const songsSchema  = new mongoose.Schema({
  title:{
    type: "String",
    requried: true
  },
  artist:{
    type: "String",
    requried: true
  },
  imgUrl:{
    type: "String",
    requried: true
  },
  audioUrl:{
    type: "String",
    requried: true
  },
  duration:{
    type: "Number",
    requried: true
  },
  albumId:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"Album",
    requried: true
  },
},{timestamps:true})


export const Songs = mongoose.model("Songs",songsSchema)