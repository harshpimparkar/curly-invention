import mongoose, { mongo } from "mongoose";

//create schema for Name, Username, password, Gender, Profile type
const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    //enum used for certain value out of the a few
    gender: {
        type: String,
        required: true,
        enum: ["male","female"],
    },

    profilePic: {
        type: String,
        default: "",
    },
})

//create a model from the above schema 
//User is the model created from above schema
const User = mongoose.model("User",userSchema)
export default User