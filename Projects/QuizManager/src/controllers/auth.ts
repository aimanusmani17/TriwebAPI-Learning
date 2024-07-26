import { Request, Response, NextFunction } from "express";
import bcrypt from "bcryptjs";
import User from "../models/user";
import jwt from 'jsonwebtoken'


const registerUser = async (req: Request, res: Response) => {
    let resp: ReturnResponse;
  
    try {
      const email = req.body.email;
      const name = req.body.name;
      let password = await bcrypt.hash(req.body.password, 12);
  
      const user = new User({ email, name, password });
      const result = await user.save();
  
      if (!result) {
        resp = { status: "error", message: "No result found", data: {} };
        res.send("No result found");
      } else {
        resp = {
          status: "success",
          message: "Registration done",
          data: { userId: result._id },
        };
        res.send(resp);
      }
    } catch (error) {
      resp = { status: "success", message: "Something went wrong", data: {} };
      res.status(500).send(resp);
    }
  };
  
  const login = async (req: Request, res: Response) => {
    let resp: ReturnResponse;
    try {
      const email = req.body.email;
      const password = req.body.password;
  
      //find user with email
      const user = await User.findOne({ email });
  
      if(!user){
          resp = { status: "error", message: "User Doesnt exist", data:{} };
          res.status(401).send(resp);
      } else{
           // verify password using bcrypt
      const status = await bcrypt.compare(password, user.password);
      // decide
      if (status) {
  
          const token = jwt.sign({userId:user._id}, "secretmyverysecretkey",{expiresIn: '1h' })
  
        resp = { status: "success", message: "Logged in", data: {token} };
        res.send(resp);
      } else {
        resp = { status: "error", message: "Credential mismatched", data: {} };
        res.status(401).send(resp);
      }
          
      }
  
     
      
    } catch (error) {
      console.log(error);
      resp = { status: "error", message: "Something went wrong", data: {} };
      res.status(500).send(resp);
    }
  };

  export { registerUser, login };