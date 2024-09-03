

const emailOtpTemplate = (otp) => {

    return `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Your OTP Code - AllCodeHub</title>
          <style>
            body {
              font-family: 'Poppins', sans-serif;
              background-color: #f9f9f9;
              color: #333;
              padding: 20px;
              margin: 0;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              background-color: #fff;
              padding: 20px;
              border-radius: 10px;
              box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            }
            .header {
              text-align: center;
              margin-bottom: 20px;
            }
            .header img {
              height: 50px;
            }
            .otp {
              font-size: 32px;
              font-weight: bold;
              color: #4caf50;
              letter-spacing: 5px;
              margin: 20px 0;
              text-align: center;
            }
            .footer {
              text-align: center;
              font-size: 12px;
              color: #999;
              margin-top: 20px;
            }
            .footer a {
              color: #4caf50;
              text-decoration: none;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>AllCodeHub</h2>
            </div>
            <p>Dear User,</p>
            <p>Your OTP code is:</p>
            <div class="otp">${otp}</div>
            <p>Please use this code to complete your verification. The code is valid for 5 minutes.</p>
            <p>Do not share this code with anyone.</p>
            <div class="footer">
              <p>Need help? Contact us at <a href="mailto:aaryanmeena96@gmial.com">aaryanmeena96@gmail.com</a></p>
              <p>&copy; ${new Date().getFullYear()} AllCodeHub. All rights reserved.</p>
            </div>
          </div>
        </body>
      </html>
    `;
  };


  export default emailOtpTemplate
  