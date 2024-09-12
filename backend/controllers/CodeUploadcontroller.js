
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
      author: req.user._id 
    });

    //save kra
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
    // Get the codeUploadId and comment content from the request body
    const { codeUploadId, content } = req.body;

    console.log("Reached comment controller");

    // Find the code upload by ID
    const codeUpload = await CodeUpload.findById(codeUploadId);

    // If the code upload doesn't exist, return 404
    if (!codeUpload) {
      return res.status(404).json({ message: 'Code upload not found' });
    }

    console.log("Code from backend fetched:", codeUpload);

    // Add the comment with the user ID from the request (assuming authentication middleware)
    codeUpload.comments.push({
      user: req.user._id, // Use the authenticated user's ID
      content
    });

    // Save the updated codeUpload document
    await codeUpload.save();

    res.status(200).json({ message: 'Comment added successfully', codeUpload });

  } catch (error) {
    console.log("Error in comment controller:", error);
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