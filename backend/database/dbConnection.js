import mongoose from "mongoose";

export const dbConnection = ()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName: "HOSPITAL"
    }).then(()=>{
        console.log("Connection to database")
    }).catch(err=>{
        console.log(`Some error occured while connecting to database: ${err}`);
    });
};