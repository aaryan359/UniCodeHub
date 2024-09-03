import mongoose from 'mongoose'; 

// Define comment schema
const commentSchema = new mongoose.Schema({
  user: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    // required: true 
  },
  content: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now 
  }
});

// Define code upload schema
const codeUploadSchema = new mongoose.Schema({

  title: {
    type: String,
    required: true 
  },

  description: { 
    type: String 
  },
  code: [ // Array of code snippets
    { type: String, required: true }
  ],
  language: { 
    type: String, 
    required: true 
  },
  author: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
    // required: true 
  },
  previewUrl: {
    type: String
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  },
  likes: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User' 
  }],
  comments: [commentSchema] // Embed the comment schema
});

// Export the model

export const CodeUpload = mongoose.model('CodeUpload', codeUploadSchema);




