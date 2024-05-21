import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    email_user:{
        type:String,
        required: true,
        unique: true
    },

    username_user : {
        type: String,
        required: true,
        unique:  true
    },

    password_user:{
        type: String,
        required:true
    },

    role_user:{
        type: String,
        enum:["reader", "producer", "editor"],
        default: "reader"
    } 

});

const userModel = mongoose.model("user", userSchema);

export default userModel;