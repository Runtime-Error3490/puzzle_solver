import mongoose from "mongoose";
import 'dotenv/config'
const connectDB= async()=>{
    try{
        console.log(`${process.env.MONGDODB_URI}`)
        const dbURI=`${process.env.MONGDODB_URI}`;
        const conn=await mongoose.connect(dbURI);
        console.log(`MongoDB connected: ${conn.connection.host}`);
    }
    catch(err){
        console.error(err);
        process.exit(1);
    }
};
export default connectDB;