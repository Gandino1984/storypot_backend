import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({

    title_project : {
        type: String,
        required: true
    },

    description_project:{
        type: String
    },

});

const projectModel = mongoose.model("project", projectSchema);

export default projectModel;