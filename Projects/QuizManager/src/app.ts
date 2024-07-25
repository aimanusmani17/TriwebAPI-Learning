import express from 'express';
import mongoose from 'mongoose';

import UserRoute from './routes/user';


const app= express();

const connectionString= process.env.CONNECTION_STRING || " ";

app.use(express.json());

app.get('/', (res,req)=>{
    // tsc  res.send("hi hello");
})

//Redirect / user to userRoute
app.use('/user',UserRoute);

mongoose.connect(connectionString).then(() => {
    app.listen(process.env.port);
    console.log("Server connected");
  });

 
  


// mongoose.connect(connectionString(err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }


// app.listen(3000,()=> {
//     console.log("Server Connceted");
// });

// });

