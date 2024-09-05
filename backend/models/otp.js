
import mongoose,{Schema} from 'mongoose';

import mailtempalte from '../mail/mailtempalte.js'

import mailsender from '../utils/mailsender.js';


import dotenv from 'dotenv';
dotenv.config({
  path:'./.env'
})

const otpSchema = new mongoose.Schema({
    email:{
      type:String,
      required:true
    },
    otp:
    {
     type:String,
     required:true
    
    },
    createdAt:{
        type:Date,
        default:Date.now,
        index:{ expires:300}
    }
     
 },{timestamps:true});
 

    async function sendverificationemail(email,otp){
    try{
         await   mailsender(email,"Verification code for AllCodeHub", mailtempalte(otp));
    
    } catch(error){   
       console.log( "error occur while sending email" ,error.message);
       throw error;
    }
 }

 otpSchema.pre('save', async function(next){
        await sendverificationemail(this.email,this.otp);
        next();
});



export const Otp = mongoose.model('Otp',otpSchema);