import mongoose from "mongoose";

const dbConnection = async()=>{

    try{
          await mongoose.connect(process.env.MONGO_URI!);
          console.log("connection successful");
    }

    catch(err){
        console.log("connection was unsucessful");
        process.exit(1);
    }


}

export default dbConnection;