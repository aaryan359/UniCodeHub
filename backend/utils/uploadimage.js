import {v2 as cloudinary} from 'cloudinary';
const uploadImage = async (file,folder)=>{
   
    const options = {folder};
   
    options.resource_type = 'auto';
    
    return await cloudinary.uploader.upload(file.tempFilePath,options)
    
}
export default uploadImage;
