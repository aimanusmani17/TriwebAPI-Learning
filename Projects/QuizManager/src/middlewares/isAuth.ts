import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';

const isAuththenticated = (req: Request, res: Response, next: NextFunction) => {
    
    
    let isAuththenticated = true;
  //  header--> token
    
    const authHeader = req.get("Authorization");
    if(!authHeader){
        const err = new Error("not authenticated");
        // err.statusCode = 401;
        throw err;
        // res.status(401).send("Not Authenticated")
    }
    //jwt--> decode using sign "secretmyverysecretkey"
    const token = authHeader.split(' ')[1];

    let decodeToken:{userId:String, iat:Number, exp: Number};
    try {
       decodeToken = <any> jwt.verify(token, "secretmyverysecretkey");
        
    } catch (error) {
       const err = new Error("not authenticated");
        
    }
    if(!decodeToken){
        const err = nre Error("not authenticated");
        throw err;

    }   
    //userID

   req.userId = decodeToken.userId;
   console.log(decodeToken);  
   next();
   
    
   
   
}
    
export {isAuththenticated};