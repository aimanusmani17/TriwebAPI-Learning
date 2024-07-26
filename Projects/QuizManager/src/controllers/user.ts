// send/ recieve data to/from database via model

import { Request, Response, NextFunction } from "express";
import bcrypt from "bcryptjs";
import User from "../models/user";
import jwt from 'jsonwebtoken'

interface ReturnResponse {
  status: "success" | "error";
  message: String;
  data: {};
}



const getUser = async (req: Request, res: Response) => {
  let resp: ReturnResponse;
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId);
    if (!user) {
      resp = { status: "error", message: "No user found", data: {} };
      res.status(500).send(resp);
    } else {
      resp = { status: "success", message: "user found", data: { user: user } };
      res.status(500).send(resp);
    }
  } catch (error) {
    console.log(error);
    resp = { status: "error", message: "Something went wrong", data: {} };
    res.status(500).send(resp);
  }
};

const updateUser = async (req: Request, res: Response) => {
  let resp: ReturnResponse;
  try {
    const userId = req.body._id;
    const user = await User.findById(userId);
    if (user) {
      user.name = req.body.name;
      await user.save();

      resp = { status: "success", message: "user Updated", data: {} };
      res.send(resp);
    }
  } catch (error) {
    console.log(error);
    resp = { status: "error", message: "Something went wrong", data: {} };
    res.status(500).send(resp);
  }
};

export {  getUser, updateUser };
