import { v2 as cloudinary } from 'cloudinary';
import dotenv from "dotenv";
dotenv.config();

const cloudinaryconnnect = ()=>{
    try {
        cloudinary.config({
            cloud_name: process.env.CLOUDINARY_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET
        })
        console.log('Cloudinary Connected successfully');
    } catch (error) {
        console.log(error+'cloudinary  connection error');
    }
}
export default cloudinaryconnnect;