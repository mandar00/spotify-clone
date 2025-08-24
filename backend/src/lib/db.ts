import mongoose from "mongoose"

export const connectDb = async ()=>{
  try {
    const conn = await mongoose.connect(process.env.MONGO_DB_URI || "")
    console.log('connected to ' + conn.connection.host);
    
  } catch (error) {
    console.log('Failed to connect to mongo db');
    // close the complete backend application if app is not able to connect to the db 
    process.exit(1) 
    
  }

}