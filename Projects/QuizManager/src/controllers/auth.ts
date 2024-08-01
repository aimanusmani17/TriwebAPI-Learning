import { RequestHandler } from "express";

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { validationResult } from 'express-validator';


import User from "../models/user";
import ProjectError from '../helper/error';

interface ReturnResponse {
  status: "success" | "error";
  message: String;
  data: {} | [];
}

//InTHIS FILE WE ARE USING REQUESTHANDLER INSTEAD OF REQ,RES,NEXTFUNCTION

const registerUser:RequestHandler = async (
  req,
  res,
  next
) => {
  let resp: ReturnResponse;

  try {
    // Validation
    const validationError = validationResult(req);
    console.log(validationError);
    if(!validationError.isEmpty()){
      const err = new ProjectError("Validation Falied");
      err.statusCode =422;
      err.data =  validationError.array();
      throw err;

    }
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
    next(error);
  }
};

const login:RequestHandler = async (req, res, next) => {
  let resp: ReturnResponse;
  try {
    const email = req.body.email;
    const password = req.body.password;

    //find user with email
    const user = await User.findOne({ email });

    if (!user) {
      const err = new ProjectError("User Doesnt exist");
      resp = { status: "error", message: "user doesnt exist", data: {  } }
      res.status(401).send(resp);
      err.statusCode = 401;
      throw err;

    } 
      // verify password using bcrypt
      const status = await bcrypt.compare(password, user.password);
      // decide
      if (status) {
        const token = jwt.sign({ userId: user._id }, "secretmyverysecretkey", {
          expiresIn: "1h",
        });
        resp = {status:"success", message:"Logged in", data:{token}};
        res.status(401).send(resp);

        resp = { status: "success", message: "Logged in", data: { token } };
        res.send(resp);
      } else {
        
        const err = new ProjectError("Credential mismatched");
        err.statusCode = 401;
        throw err;
  
      }
    
  } catch (error) {
    next(error);
  }
};

const isUserExist = async (email:String) => {
  
  const user = await User.findOne({ email });

  if (!user) {
    return false;
  }
  return true;
}

export { registerUser, login, isUserExist };
