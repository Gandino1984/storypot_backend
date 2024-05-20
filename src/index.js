import express from "express";

import dotenv from "dotenv";

import connectDB from "./config/mongo.js";

dotenv.config();

const CONTAINER_PORT = 3000;

const app = express();

connectDB();

app.get("/", (req,res)=>{
    res.json({message:"Storypot says hi!"});
})

app.listen(CONTAINER_PORT, ()=>{
    console.log("Storypot app running in port " + process.env.APP_PORT);
})