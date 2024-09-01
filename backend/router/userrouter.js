import { Router } from "express";
import { registerUser } from "../controllers/Usercontroller.js";
import { login } from "../controllers/Usercontroller.js";
import { verifyJWT } from "../midlewares/auth.js";
//import { verifyJWT } from "../middlewares/auth.js"; // Corrected the typo

// import { verifyOtp } from "../controllers/Usercontroller.js";
import { sendotp } from "../controllers/Usercontroller.js";
const router = Router();
console.log("Router file loaded"); // Updated console log



router.route('/registeruser').post(registerUser);

router.route('/sendotp').post(sendotp);

// router.route('/verifyotp').post(verifyOtp);


router.route('/login').post(verifyJWT,login);





// Secured routes
// Uncomment these routes if needed
// router.route('/logout').post(verifyJWT, logoutUser);
// router.route('/refresh-token').post(refreshAccessToken);

export default router;
