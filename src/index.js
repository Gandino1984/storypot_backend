import express from "express";
import dotenv from "dotenv";

dotenv.config();
const CONTAINER_PORT = 3000;

const app = express();

app.get("/", (req,res)=>{
    res.json({message:"Storypot says hi!"});
})

app.listen(CONTAINER_PORT, ()=>{
    console.log("Storypot app running in port " + process.env.APP_PORT);
})