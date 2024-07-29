import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import ProjectError from '../helper/error';


const isAuththenticated = (req: Request, res: Response, next: NextFunction) => {
  try {

    const authHeader = req.get("Authorization");
    
    if (!authHeader) {
      const err = new ProjectError("Not authenticated");
      err.statusCode = 401;
      throw err;
    }

    const token = authHeader.split(" ")[1];

    let decodeToken: { userId: String; iat: Number; exp: Number };
    try {
      decodeToken = <any>jwt.verify(token, "secretmyverysecretkey");
    } catch (error) {
      const err = new ProjectError("not authenticated");
      throw err;
    }

    if (!decodeToken) {
      const err = new ProjectError("not authenticated");
      throw err;
    }

    req.userId = decodeToken.userId;

    next();
  } catch (error) {
    next(error);
  }
};

export { isAuththenticated };
