import express from 'express';
import { createQuiz, getQuiz, updateQuiz, deleteQuiz, publishQuiz} from '../controllers/quiz';
import { isAuththenticated } from "../middlewares/isAuth";
import {body} from "express-validator";


const router = express.Router();

//create
//POST /quiz/
router.post("/",isAuththenticated,[
    body('name')
    .trim()
    .not()
    .isEmpty()
    .isLength({min:10})
    .withMessage("Name should contain atleast 10 letter"),
    body('question_list')
        .custom(question_list =>{
            if(question_list.length==0){
                return Promise.reject("Enter at least 1 question");
            }
            return true;
        }),
        body('answers')
        .custom(answers=>{
            if(Object.keys(answers).length == 0){
                return Promise.reject("Answer should not be empty");
            }
            return true;
        })
    
], createQuiz);

//get
//GET /quiz/:id

router.get("/:quizId",isAuththenticated,[
    body('name')
    .trim()
    .not()
    .isEmpty()
    .isLength({min:10})
    .withMessage("Name should contain atleast 10 letter"),
    body('question_list')
        .custom(question_list =>{
            if(question_list.length==0){
                return Promise.reject("Enter at least 1 question");
            }
            return true;
        }),
        body('answers')
        .custom(answers=>{
            if(Object.keys(answers).length == 0){
                return Promise.reject("Answer should not be empty");
            }
            return true;
        })
    
], getQuiz);

//update
//PUT /quiz
router.put("/",isAuththenticated, updateQuiz);

//Delete
//DELETE quiz/ Publish
router.delete("/publish",isAuththenticated, deleteQuiz);

//Publish
//PATCH
router.patch("/:publish",isAuththenticated, publishQuiz);



export default router;