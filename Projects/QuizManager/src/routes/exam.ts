import express from 'express';
const router = express.Router();
import { isAuththenticated } from "../middlewares/isAuth";
import {startExam,submitExam} from "../controllers/exam";

//Get/exam/quizId
router.get('/:quizId',isAuththenticated, startExam);

// POST/exam
router.post('/',isAuththenticated, submitExam);

export default router;