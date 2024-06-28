import {Request, Response} from 'express';

import {addUserToDB} from '../models/user';


const registerUSer = (req:Request, res:Response) => {
    // fetch data from request
    // validation
    // normalize
    const userName = "Aiman";
    const password = "password";
    const result = addUserToDB(userName, password);
    res.send("USer Registration ");
};
export {registerUSer};
