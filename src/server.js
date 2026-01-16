
import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import router from "./routes/userRouter.js";
import bodyParser from "body-parser";

dotenv.config();


const app = express ();
app.use(bodyParser.json())
app.use("/api/v1" ,router)

const port = process.env.PORT
const db = process.env.DATABASE 

app.listen (port,()=>{console.log(`Port is running on ${port}`)})

mongoose.connect(db).then(()=>console.log("Database connected succefully"))
.catch((error)=>{
    console.log(`error is ${error}` )

})
