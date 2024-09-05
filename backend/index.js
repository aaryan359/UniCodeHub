import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import fileUpload from 'express-fileupload';
import dbconnect from './config/databaseconnnect.js';
dotenv.config();


const app = express();

const PORT = process.env.PORT || 9000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });


// Database connection function

dbconnect()
.then(() => {
    app.listen(PORT, console.log(`listening on port :${PORT}`));
}).catch((e) => {
    console.log(e);
})

// Middleware
app.use(cors({
    origin: process.env.CORS_ORIGIN, // allow requests from the specified origins
    credentials: true,
}));
app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded({ extended: true, limit: '16kb' }));
app.use(express.static('public'));
app.use(cookieParser());
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp',
}));


// Cloudinary connection
import cloudinaryconnect from './config/cloudinaryconnect.js'; 
cloudinaryconnect();


console.log("Middleware and connections established");


console.log("router tk aa gya hai")
// Routing
import router from './router/userrouter.js';

app.use('/api/v1/users', router);

console.log("router tk aa gya hai")

// Server setup
