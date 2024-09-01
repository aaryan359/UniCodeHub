
import nodemailer from 'nodemailer'

import dotenv from 'dotenv'

dotenv.config();



const mailsender = async (email, title, body) => {

    try {

        const transporter = nodemailer.createTransport({
            service: 'Gmail', // Replace with your email service provider
            auth: {
                user: process.env.EMAIL_USER, // Your email address
                pass: process.env.EMAIL_PASS, // Your email password or app-specific password
            },
        });



        // send mail

        let info = await transporter.sendMail({

            from: "Aryan meena",
            to: `${email}`,
            subject: `${title}`,
            html: `${body}`
        })

        console.log(" email sent info is : ", info);
        return info;



        // // Send OTP via email
        // const mailOptions = {
        //     from: process.env.EMAIL_USER, // Sender's email address
        //     to: email, // Recipient's email address
        //     subject: 'Your OTP Code', // Subject line
        //     text: `Your verification code is: ${otp}`, // Plain text body
        //   };


        //   await transporter.sendMail(mailOptions);


    } catch (error) {
        console.log(" Error come during sending mail : ", error);

    }

}

export default mailsender;
