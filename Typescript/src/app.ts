import express= require ('express');
import {Request, Response} from 'express';
import userRoute from './routes/user';

const app= express();

app.use('/user',userRoute );



app.listen( process.env.PORT);