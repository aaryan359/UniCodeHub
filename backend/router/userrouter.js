import { Router } from "express";
import { registerUser } from "../controllers/Usercontroller.js";
import { login } from "../controllers/Usercontroller.js";
import { verifyJWT } from "../midlewares/auth.js";
//import { verifyJWT } from "../middlewares/auth.js"; // Corrected the typo



// import code upload template
import { codeUpload } from "../controllers/CodeUploadcontroller.js";
import { getAllCodeUploads } from "../controllers/CodeUploadcontroller.js";
import { addComment } from "../controllers/CodeUploadcontroller.js";
import { getComments } from "../controllers/CodeUploadcontroller.js";


// import { verifyOtp } from "../controllers/Usercontroller.js";
import { sendotp } from "../controllers/Usercontroller.js";

const router = Router();
console.log("Router file loaded"); // Updated console log




router.route('/registeruser').post(registerUser);

router.route('/sendotp').post(sendotp);

// router.route('/verifyotp').post(verifyOtp);


router.route('/login').post(login);


//secure routing
router.route('/codeuploads').post(verifyJWT,codeUpload)
router.get('/getcodeuploads',verifyJWT, getAllCodeUploads);
router.post('/codeupload/comment', addComment);
router.get('/codeupload/:codeUploadId/comments', getComments);


// Secured routes
// Uncomment these routes if needed
// router.route('/logout').post(verifyJWT, logoutUser);
// router.route('/refresh-token').post(refreshAccessToken);

export default router;
