import mongoose from "mongoose";

const teamSchema = new mongoose.Schema({

    fkProject_team:{
        type: mongoose.Schema.ObjectId,
        ref:"project"
    },

    fkUser_team:{
        type: mongoose.Schema.ObjectId,
        ref:"user"
    } 

});

const teamModel = mongoose.model("team", teamSchema);

export default teamModel;   