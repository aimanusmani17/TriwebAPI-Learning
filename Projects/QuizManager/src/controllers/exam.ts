import { Request, Response} from "express";
import Quiz from "../models/quiz";
import ProjectError from "../helper/error";


const startExam = async(req=Request ,res:Response, next:NextFunction) =>{
   try {
    const quizId = req.params.quizId;
        const quiz = await Quiz.findByID(quizId,{name:1, question_list:1,is_published:1});
        if(!quiz){
            const err = new ProjectError("No quiz found");
            err.statusCode= 404;
            throw err;
        }
        res.send(quiz);
   } catch (error) {
    next(error)
    
   }

   if (quiz.is_published) {
    const err = new ProjectError("Quiz is not  published");
    err.statusCode = 405;
    throw err;
  }
   
   
   
    
}

const submitExam = async (req:Request, res:Response, next:NextFunction) =>{
    const quizId = req.body.quizId;
    const attempted_question = req.body.attempted_question;

    const quiz = await Quiz.findById(quizId,{answer:1});
    const answers = quiz.answer;
    

    
    res.send(req.body);
}

export {startExam, submitExam};