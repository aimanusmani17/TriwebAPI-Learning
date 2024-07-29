// Redirect request to Particular method on Controller
import express from "express";
import { registerUser, login, isUserExist } from "../controllers/auth";
import {body} from "express-validator";

const router = express.Router();

// POST/auth/
router.post("/",[
    body('name')
        .trim()
        .not()
        .isEmpty()
        .isLength({min:4})
        .withMessage("Name should contain atleast 4 letter"),
        body('email')
        .trim()
        .isEmail()
        .custom(emailId => {
           return  isUserExist(emailId)
                .then((status) =>{
                    if(status){
                        
                        return Promise.reject("user alreday exist! ");
                        
                    }
                    
                })
                .catch((err)=>{
                    return Promise.reject(err);
                })
        })
        .normalizeEmail()
] ,registerUser);

// POST/auth/login
router.post("/login", login);

export default router;
