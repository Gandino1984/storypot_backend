import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    email:{
        type:String,
        required: true,
        unique: true
    },

    username : {
        type: String,
        required: true,
        unique:  true
    },

    password:{
        type: String,
        required:true
    },

    role:{
        type: String,
        enum:["reader", "producer", "editor"],
        default: "reader"
    } 

});

const userModel = mongoose.model("user", userSchema);

export default userModel;