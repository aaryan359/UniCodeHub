import { User } from "../models/User.model.js";
import jwt from 'jsonwebtoken';


export const verifyJWT = async (req, res, next) => {
  
  try {
    const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      return res.status(401).json({ error: "Login to proceed" });
    }
          
    console.log( " loda khada hogya ")
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);  

    
           console.log(" loda baith gya")
    const user = await User.findById(decodedToken._id).select("-password -refreshToken");

    if (!user) {
      return res.status(401).json({ error: "Invalid user" });
    }

    req.user = user;
    console.log(" req . user se pahle ");
    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid access token" });
  }
};