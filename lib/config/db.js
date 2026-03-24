import mongoose from "mongoose";
 
export const ConnectDB=async()=>{
    await mongoose.connect('mongodb://dbmongov:vanshu%409528@ac-q1szmr0-shard-00-00.9nmfbfz.mongodb.net:27017,ac-q1szmr0-shard-00-01.9nmfbfz.mongodb.net:27017,ac-q1szmr0-shard-00-02.9nmfbfz.mongodb.net:27017/?ssl=true&replicaSet=atlas-10u0io-shard-0&authSource=admin&appName=Cluster0');
    console.log("DB Connected");
}