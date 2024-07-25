// send/ recieve data to/from database via model

import {Request, Response, NextFunction} from 'express';

const registerUser = (req: Request, res:Response, next:NextFunction) => {

    console.log(req.body);
    console.log("Resgistration Done");

    res.send("Registration done");

}

export {registerUser}