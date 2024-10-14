import connectDB from './db/index.js'
import 'dotenv/config'
import app from './app.js'
connectDB()
.then(()=>{
    console.log("MongoDB connected");
    app.listen(process.env.PORT,()=>{
        console.log(`Server running on port ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.error(err);
    process.exit(1);
})
