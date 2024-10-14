import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import 'dotenv/config';
const app=express();

app.use(cookieParser());
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({
    limit:'50mb'
}));
app.use(express.urlencoded({
    limit:'50mb',
    extended:true
}));

app.use(express.static('public'));

// import userRouter from './routes/user.route'
// app.use('/api/v1/users',userRouter);
export default app;