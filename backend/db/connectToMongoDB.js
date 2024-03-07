import mongoose, { mongo } from "mongoose";

const connectToMongoDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_DB_URI)
        console.log("Connect to Mongo DB.");
    }catch (error){
        console.log("Error connecting MongoDB.",error.message)
    }
}
export default connectToMongoDB