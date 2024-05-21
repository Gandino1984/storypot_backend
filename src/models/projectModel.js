import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({

    title_project : {
        type: String,
        required: true
    },

    description_project:{
        type: String
    },

    resources : [
        {
            type: mongoose.Schema.ObjectId,
            ref:"resource"
        }
    ]
   
});

const projectModel = mongoose.model("project", projectSchema);

export default projectModel;