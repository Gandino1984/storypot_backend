import mongoose from "mongoose";

const contentSchema = new mongoose.Schema({

    fkProject_content:{
        type: mongoose.Schema.ObjectId,
        ref:"project"
    },

    fkResource_content:{
        type: mongoose.Schema.ObjectId,
        ref:"resource"
    } 

});

const contentModel = mongoose.model("team", contentSchema);

export default contentModel;   