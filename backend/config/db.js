// connceting to the database

import mongoose from "mongoose"

export const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`Mongo db connected : ${conn.connection.host}`);
        
    } catch (error) {
        console.log(`Error: ${error} `);
        process.exit(1) // 1 means exit with faliure, 0 means sucess
    } 
}