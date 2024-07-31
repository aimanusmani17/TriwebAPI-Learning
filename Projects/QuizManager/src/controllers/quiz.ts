//model
import { Request, Response, NextFunction } from "express";
import Quiz from "../models/quiz";
import ProjectError from "../helper/error"

interface ReturnResponse {
  status: "success" | "error";
  message: String;
  data: {} | [];
}

const createQuiz = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const created_by = req.userId;
    const name = req.body.name;
    const question_list = req.body.question_list;
    const answer = req.body.answer;

    const quiz = new Quiz({ name, question_list, answer, created_by });
    const result = await quiz.save();
    const resp: ReturnResponse = {
      status: "success",
      message: "Quiz created successfully ",
      data: { quizId: result._id },
    };
    res.status(201).send(resp);
  } catch (error) {
    next(error);
  }
};

const getQuiz = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const quizId = req.params.quizId;
    const quiz = await Quiz.findById(quizId);
    if(!quiz){
        const err = new ProjectError("Quiz not found");
        err.statusCode = 404;
        throw err;
    }
    const resp: ReturnResponse = {
      status: "success",
      message: "Quiz ",
      data: quiz};
    res.status(200).send(resp);
  } catch (error) {
    next(error);
  }
};
const updateQuiz = (req: Request, res: Response) => {
  res.send(req.body);
};

const deleteQuiz = (req: Request, res: Response) => {
  res.send(req.params.quizId);
};

const publishQuiz = (req: Request, res: Response) => {
  res.send(req.body);
};

export { createQuiz, getQuiz, updateQuiz, deleteQuiz, publishQuiz };
