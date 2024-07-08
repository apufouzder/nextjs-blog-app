import mongoose from "mongoose"


export const ConnectDB = async () => { 
    await mongoose.connect(`mongodb+srv://${process.env.DB_NAME}:${process.env.USER_PASS}@cluster0.ls5ir.mongodb.net/blogApp`)
    console.log("ConnectDB started successfully!");
}