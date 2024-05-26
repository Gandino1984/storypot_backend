import express from "express";

import dotenv from "dotenv";

import connectDB from "./config/mongo.js";

import router from "./routes/router.js";

dotenv.config();

const CONTAINER_PORT = 3000;

const app = express();

//post requests read
app.use(express.json());
// app.use(express.urlencoded({extended:true}));


connectDB();

app.get("/", (req,res)=>{
    res.json({message:"Storypot says hi!"});
})

app.use("/api", router);

app.listen(CONTAINER_PORT, ()=>{
    console.log("Storypot app running in port " + process.env.APP_PORT);
})