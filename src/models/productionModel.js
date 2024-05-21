import mongoose from "mongoose";

const productionSchema = new mongoose.Schema({

    fkUser_production:{
        type: mongoose.Schema.ObjectId,
        ref:"user"
    },

    fkResource_content:{
        type: mongoose.Schema.ObjectId,
        ref:"resource"
    } 

});

const productionModel = mongoose.model("team", productionSchema);

export default productionModel;   