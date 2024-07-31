import express from 'express';
import { createQuiz, getQuiz, updateQuiz, deleteQuiz, publishQuiz} from '../controllers/quiz';
import { isAuththenticated } from "../middlewares/isAuth";

const router = express.Router();

//create
//POST /quiz/
router.post("/",isAuththenticated, createQuiz);

//get
//GET /quiz/:id

router.get("/:quizId",isAuththenticated, getQuiz);

//update
//PUT /quiz
router.put("/",isAuththenticated, updateQuiz);

//Delete
//DELETE quiz/ quizId
router.delete("/:quizId",isAuththenticated, deleteQuiz);

//Publish
//PATCH
router.patch("/:publish",isAuththenticated, publishQuiz);



export default router;