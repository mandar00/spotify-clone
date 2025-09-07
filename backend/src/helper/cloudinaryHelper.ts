import { v2 as cloudinary } from 'cloudinary'

export const uploadToCloudinary = async (file: File,shouldThrowError=true) => {
  try {
    const result = await cloudinary.uploader.upload(file.name, { resource_type: "auto" })
    return result.secure_url
  } catch (error) {
    console.log('Error in upload to cloudinary',error);
    if(shouldThrowError) throw new Error("upload to cloudinary ")
  }

}