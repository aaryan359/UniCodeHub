
import { CodeUpload } from '../models/usercodeupload.js';



// Create a new code upload entry
 const codeUpload = async (req, res) => {

    console.log("code uplaod me aa gya hai");

  try {
    console.log(" yha tk code aa gya hai")
    //user se data liya 
    const { title, description, code, language } = req.body;
    

    //db me entry kri
    const newCodeUpload = new CodeUpload({
      title,
      description,
      code,
      language,
    //   author: req.user._id // Assuming user is authenticated
    });

    //save kkra
    await newCodeUpload.save();

    //response bheja
    res.status(201).json({ message: 'Code upload created successfully!',  newCodeUpload });

    
  }
  //error handle 
  catch (error) {
    console.log(" code up-load api error")
    res.status(400).json({ error: error.message });
  }
};






// to get all codeuploaded by ujser
 const getAllCodeUploads = async (req, res) => {

  try {
    // find code 
    const codeUploads = await CodeUpload.find().populate('author', 'username').populate('likes', 'username');

    res.status(200).json({ codeUploads });

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};




// comment api
 const addComment = async (req, res) => {
  try {

    // text and particular code id
    const { codeUploadId, content } = req.body;


    const codeUpload = await CodeUpload.findById(codeUploadId);


    if (!codeUpload) {
      return res.status(404).json({ message: 'Code upload not found' });
    }

    codeUpload.comments.push({
    //   user: req.user._id,
      content
    });


    await codeUpload.save();

    res.status(200).json({ message: 'Comment added successfully', codeUpload });


  } catch (error) {

    res.status(400).json({ error: error.message });
  }
};




// get all commnets


const getComments = async (req, res) => {
  try {
    const { codeUploadId } = req.params;

    const codeUpload = await CodeUpload.findById(codeUploadId).populate('comments.user', 'username');

    if (!codeUpload) {
      return res.status(404).json({ message: 'Code upload not found' });
    }

    res.status(200).json({ comments: codeUpload.comments });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};



export { codeUpload, getAllCodeUploads, addComment ,getComments};