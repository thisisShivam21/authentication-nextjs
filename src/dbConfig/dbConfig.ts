import VerifyEmailPage from "@/app/verifyemail/page";
import mongoose from "mongoose";

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URI!);
        const connection = mongoose.connection;

        connection.on("connected", () => {
            console.log("MongoDB connected Successfully!");
        })

        connection.on("error", (err) => {
            console.log("MongoDB connection error. Please make sure mongoDB is running" + err);
            process.exit();
        })
    }
    catch(error) {
        console.log("Something Went Wrong!");
        console.log(error);
    }
}
