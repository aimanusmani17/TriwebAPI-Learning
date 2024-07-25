import express from 'express';
import mongoose from 'mongoose';

import UserRoute from './routes/user';


const app= express();

const connectionString= "mongodb+srv://myuser:abcd@mycluster.twqc0pp.mongodb.net/quizApp?retryWrites=true&w=majority&appName=mycluster"

app.use(express.json());

app.get('/', (res,req)=>{
    // tsc  res.send("hi hello");
})

//Redirect / user to userRoute
app.use('/user',UserRoute);

mongoose.connect(process.env.connectionString).then(() => {
    app.listen(process.env.port);
    console.log("Server connected");
  });

app.listen(3000);