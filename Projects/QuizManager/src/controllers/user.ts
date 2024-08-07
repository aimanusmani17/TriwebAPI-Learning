// send/ recieve data to/from database via model

import { Request, Response, NextFunction } from "express";

import User from "../models/user";
import ProjectError from '../helper/error';


interface ReturnResponse {
  status: "success" | "error";
  message: String;
  data: {};
}

const getUser = async (req: Request, res: Response, next: NextFunction) => {
  let resp: ReturnResponse;
  console.log(req.userId);
  try {
    const userId = req.params.userId;

    if (req.userId != req.params.userId) {
      const err = new ProjectError("You are not authorized");
      err.statusCode = 401;
      throw err;
    }
    const user = await User.findById(userId);
    if (!user) {
      resp = { status: "error", message: "No user found", data: {} };
      res.status(500).send(resp);
    } else {
      resp = { status: "success", message: "user found", data: { user: user } };
      res.status(500).send(resp);
    }
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  let resp: ReturnResponse;

  try {

    if(req.userId != req.body._id){
      const err = new ProjectError("you are not authorised");
      err.statusCode = 401;
      throw err;
    }

    const userId = req.body._id;
    const user = await User.findById(userId);
    if (user) {
      if(req.userId !=req.body._id){
        const err = new ProjectError("you are not authorized");
        err.statusCode= 401;
        throw err;
      }
      user.name = req.body.name;
      await user.save();

      resp = { status: "success", message: "user Updated", data: {} };
      res.send(resp);
    }
  } catch (error) {
    next(error);
  }
};

export { getUser, updateUser };
