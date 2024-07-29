import { Request, Response, NextFunction } from "express";
import express from "express";
import mongoose from "mongoose";

import UserRoute from "./routes/user";
import authRoute from "./routes/auth";
import ProjectError from "./helper/error";

const app = express();
interface ReturnResponse {
  status: "success" | "error";
  message: String;
  data: {};
}

declare global {
  namespace Express {
    interface Request {
      userId: String;
    }
  }
}

const connectionString = process.env.CONNECTION_STRING || "";

app.use(express.json());

app.get("/", (res, req) => {
  // tsc  res.send("hi hello");
});

//Redirect / user to userRoute
app.use("/user", UserRoute);

//Redirect to auth to authroute
app.use("/auth", authRoute);

app.use(
  (err: ProjectError, req: Request, res: Response, next: NextFunction) => {
    
    let message: String;
    let statusCode: number;
    let data
     console.log(err);
    if (!!err.statusCode && err.statusCode < 500) {
      message = err.message;
      statusCode = err.statusCode;
    } else {
      message = "Something went wrong please try after sometimes!";
      statusCode = 500;
    }
    let resp: ReturnResponse= { status:"error",message, data:{}}
    if (!!err.data) {
      resp.data = err.data;
    }
     resp = { status: "error", message, data: {} };
    if (!!err.data) {
      resp.data = err.data;
    }
    console.log(err.statusCode,err.message);
    res.status(statusCode).send(resp);
  }
);

mongoose.connect(connectionString).then(() => {
  app.listen(process.env.PORT);
  console.log("Server connected");
});
