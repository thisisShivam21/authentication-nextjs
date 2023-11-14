import nodemailer from "nodemailer"
import User from "@/models/userModel"
import bcryptjs from "bcryptjs"

export const sendEmail = async ({ email, emailType, userId }: any) => {
    try {
        // Create the Hashed Token
        const hashedToken = await bcryptjs.hash(userId.toString(), 10)

        // Update the user.

        if (emailType === "VERIFY") {
            await User.findByIdAndUpdate(userId, {verifyToken: hashedToken, verifyTokenExpiry: Date.now() + 3600000})
        } else if (emailType === "RESET") {
            await User.findByIdAndUpdate(userId, 
                {forgotPasswordToken: hashedToken, forgotPasswordTokenExpiry: Date.now() + 3600000})
        }

        var transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 25,
            auth: {
              user: "59434b2ae02eff",
              pass: "cea4c51b83901d"
            }
          });

        const mailOptions = {
            from: "shivambhardwaj8585@gmail.com",
            to: email,
            subject: emailType === "VERIFY" ? "Verify your email" : "Reset your password",
            html: `
            <p>Click 
            <a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}">Here</a> 
            to ${emailType === "VERIFY" ? "verify your email" : "reset your email"} 
            or copy and paste the link below in your browser.</p>
            <br> ${process.env.DOMAIN}/verifyemail?token=${hashedToken}
            `
        }

        const mailresponse = await transport.sendMail(mailOptions)

        return mailresponse

    } catch (error: any) {
        throw new Error(error.message)
    }
}