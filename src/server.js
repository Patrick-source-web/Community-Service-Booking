
import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config();
const app = express ();
const port = process.env.PORT
const db = process.env.DATABASE 

app.listen (port,()=>{console.log(`database is running on ${port}`)})

mongoose.connect(db).then(()=>console.log("database connected succefully"))
.catch((error)=>{
    console.log(`error is ${error}` )

})
