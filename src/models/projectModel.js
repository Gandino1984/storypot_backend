import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({

    title : {
        type: String,
        required: true
    },

    description:{
        type: String
    },

    fkUsers: [
        {
            type: mongoose.Schema.ObjectId,
            ref:"user"
        }
    ],

    // fkResources: [
    //     {
    //         type: mongoose.Schema.ObjectId,
    //         ref:"resource"
    //     }
    // ]
   
});

const projectModel = mongoose.model("project", projectSchema);

export default projectModel;