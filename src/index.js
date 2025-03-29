// require('dotenv').config({path:'./env'})
import connectDB from "./db/index.js";
import dotenv from 'dotenv'

dotenv.config(
    {
        path:'./env'
    }
)

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000 , ()=>{
        console.log(`Server is running on Port : ${process.env.PORT}`);
        
    })
})
.catch((err)=>{
    console.log("Mongo db connection failed !!!",err);
})



/*
import express from "express";

const app = express()

    (async () => {
        try {
            await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
            app.on("errror", (error) => {
                console.log("error", error)
                throw error
            })

            app.listen(process.env.PORT,()=>{
                console.log(`App listen on port${process.env.PORT}`)
            })


        } catch (error) {
            console.error("ERROR", error)
            throw error

        }
    })*/