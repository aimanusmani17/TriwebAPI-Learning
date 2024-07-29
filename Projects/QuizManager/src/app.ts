import { Request, Response, NextFunction } from "express";
import express from "express";
import mongoose from "mongoose";

import UserRoute from "./routes/user";
import authRoute from "./routes/auth";

const app = express();

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

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  // logger for error
  console.log(err);
  res.send("try again");
});

mongoose.connect(connectionString).then(() => {
  app.listen(process.env.PORT);
  console.log("Server connected");
});
