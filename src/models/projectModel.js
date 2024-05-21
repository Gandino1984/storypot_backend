import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({

    title_project : {
        type: String,
        required: true
    },

    description_project:{
        type: String
    },

    users_project: [
        {
            type: mongoose.Schema.ObjectId,
            ref:"user"
        }
    ],

    resources_project: [
        {
            type: mongoose.Schema.ObjectId,
            ref:"resource"
        }
    ]
   
});

const projectModel = mongoose.model("project", projectSchema);

export default projectModel;