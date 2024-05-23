import mongoose from "mongoose";

export async function connectMongoDB(uri){
    try {
        await mongoose.connect(uri)
        console.log(" =========>> Connection successfully <<========= ");
    } catch (error) {
        console.log({error,message:"Error in connection"});
    }
}