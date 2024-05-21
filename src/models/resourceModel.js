import mongoose from "mongoose";

const resourceSchema = new mongoose.Schema({

    type_resource:{
        type: String,
        required: true,
        enum:["text", "image", "audio", "video", "mixed"],
        default: "text"
    },
    
    title_resource:{
        type: String,
        required: true
    },

    synopsis_resource:{
        type: String,
        required: true
    },

    fullDescription_resource:{
        type: String
    },

});

const resourceModel = mongoose.model("resource", resourceSchema);

export default resourceModel;