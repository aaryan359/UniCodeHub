import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();


const dbconnect = async () => {
    try {
     const connectionInstance =    mongoose.connect(`${process.env.DATABASE_URL}`,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
     })
        console.log(`Connected to MongoDB at successfully`);
    } catch (error) {
        console.error("error: " + error);
        process.exit(1);
    }
};
export default dbconnect