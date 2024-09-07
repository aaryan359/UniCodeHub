import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const mailsender = async (email, title, body) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'Gmail', 
            auth: {
                user: process.env.EMAIL_USER, 
                pass: process.env.EMAIL_PASS, 
            },
        });

        // send mail
        let info = await transporter.sendMail({
            from: `"Aryan meena" <${process.env.EMAIL_USER}>`, 
            to: `${email}`,  
            subject: `${title}`,  
            html: `${body}`,  
        });

        console.log("Email sent info is:", info);
        return info;

    } catch (error) {
        console.log("Error during sending mail:", error);
    }
};

export default mailsender;
