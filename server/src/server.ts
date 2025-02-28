import express from "express";
import { connectToDB } from "./db";
import dotenv from 'dotenv'

dotenv.config({
  path:'.env'
})
export const app = express();


connectToDB().then(()=>{
  app.listen(process.env.PORT||8000,()=>{
    console.log(
      "Server is started on port",process.env.PORT||8000
    )
  })
})
.catch((error:any)=>{
  console.log(error.message)
  process.exit(1)
})