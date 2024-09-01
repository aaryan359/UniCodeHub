import { User } from "../models/User.model.js";
import jwt from 'jsonwebtoken';





export const verifyJWT = async (req, res, next) => {
  try {


    // Extract token from cookies or authorization header
    const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "");



    // Check if token exists
    if (!token) {
      throw new ApiError(401, "loggin to krle phle ");
    }



    // Verify the token and extract the payload
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    


    // Find the user based on the token's payload
    const user = await User.findById(decodedToken?._id).select("-password -refreshToken");

    // If no user is found, throw an error
    if (!user) {
      throw new Error(401, "loggin  kr ja");
    }


    // Attach the user object to the request for future middleware/functions
    req.user = user;

    // Move to the next middleware
    next();


  } catch (error) {
    throw new Error(401, "Invalid access token");
  }
}

