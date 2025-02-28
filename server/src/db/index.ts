import mongoose from "mongoose"

export const connectToDB=async()=>{
    try {
        console.log(process.env.MONGO_URI)
        await mongoose.connect(process.env.MONGO_URI!)
        console.log("Database connected successfully")
    } catch (error:any) {
        console.log(error.message)
        process.exit(1)
    }
}