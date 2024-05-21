import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({

    email_project:{
        type:String,
        required: true,
        unique: true
    },

    username_project:{
        type: String,
        required: true,
        unique:  true
    },

    password_project:{
        type: String,
        required:true
    },

    role_project:{
        type: String,
        enum:["reader", "producer", "editor"],
        default: "reader"
    },
    
    resource_project: [
        {
            type: mongoose.Schema.ObjectId,
            ref:"resource"
        }
    ],

    project_project: [
        {
            type: mongoose.Schema.ObjectId,
            ref:"project"
        }
    ]

});

const projectModel = mongoose.model("project", projectSchema);

export default projectModel;   