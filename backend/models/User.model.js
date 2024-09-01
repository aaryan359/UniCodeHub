
import mongoose,{Schema} from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
dotenv.config({
  path:'./.env'
})

const userSchema = new mongoose.Schema({
    username:{
      type:String,
      required:true,
      unique:true,
      trim:true,
      indexe:true, 
    },
    email:
    {
     type:String,
     required:true,
     unique:true,
     trim:true,
    },
    fullname:{
     type:String,
     required:true,
      trim:true,
      indexe:true,
    },

    ProfileImage:{
     type:String, //cloundnary
     required:true,
    },
    phonenumber:{
        type:Number,
        required:true
    },
    password:{
     type:String,
     required:[true,"password is required"],
     minlength:8,
    },
    verfied:{
     type:Boolean,
     required:true
    },   
    refreshToken:{
     type:String,
   },   
 
 },{timestamps:true});
 

userSchema.pre("save", async function (next) {
  if(!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10)
  next()
});


userSchema.methods.isPasswordCorrect = async function(password){
  console.log(" user model me aa gya hai",password)
  return await bcrypt.compare(password, this.password)
}


userSchema.methods.generateAccessToken = function(){
  console.log(" access token generate krne  ka function ")
  return jwt.sign(
    {
        _id: this._id,
        email: this.email,
        username: this.username,
        fullName: this.fullName

    },
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn: process.env.ACCES_TOKEN_EXPIRY
    });
}


userSchema.methods.generateRefreshToken = function(){
  // console.log(" access token ka ")
  return jwt.sign(
      {
          _id: this._id,
          
      },
      process.env.REFERESH_TOKEN_SECRET,
      {
          expiresIn: process.env.REFERESH_TOKEN_EXPIRY
      }
  )
}

export const User = mongoose.model('User',userSchema);