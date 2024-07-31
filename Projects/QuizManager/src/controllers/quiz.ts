//model
import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

import Quiz from "../models/quiz";
import ProjectError from "../helper/error";

interface ReturnResponse {
  status: "success" | "error";
  message: String;
  data: {} | [];
}

const createQuiz = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const validationError = validationResult(req);
    if (validationError.isEmpty()) {
      const err = new ProjectError("Validation failed!");
      err.statusCode = 422;
      err.data = validationError.array();
      throw err;
    }

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
    const quiz = await Quiz.findById(quizId, {
      name: 1,
      question_list: 1,
      answers: 1,
      created_by: 1,
    });
    if (!quiz) {
      const err = new ProjectError("Quiz not found");
      err.statusCode = 404;
      throw err;
    }

    if (req.userId !== quiz.created_by.toString()) {
      const err = new ProjectError("you are not authorised");
      err.statusCode = 403;
      throw err;
    }
    const resp: ReturnResponse = {
      status: "success",
      message: "Quiz ",
      data: quiz,
    };
    res.status(200).send(resp);
  } catch (error) {
    next(error);
  }
};
const updateQuiz = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const quizId = req.body._id;
    const quiz = await Quiz.findById(quizId);

    const validationError = validationResult(req);
    if (validationError.isEmpty()) {
      const err = new ProjectError("Validation failed!");
      err.statusCode = 422;
      err.data = validationError.array();
      throw err;
    }


    if (!quiz) {
      const err = new ProjectError("Quiz not found");
      err.statusCode = 404;
      throw err;
    }
    if (req.userId !== quiz.created_by.toString()) {
      const err = new ProjectError("you are not authorised");
      err.statusCode = 403;
      throw err;
    }

    if (!quiz) {
      const err = new ProjectError("Quiz not found");
      err.statusCode = 404;
      throw err;
    }
    if (quiz.is_published) {
      const err = new ProjectError("You cannot update publish quiz");
      err.statusCode = 405;
      throw err;
    }

    quiz.name = req.body.name;
    quiz.question_list = req.body.question_list;
    quiz.answer = req.body.answer;

    await quiz.save();

    const resp: ReturnResponse = {
      status: "success",
      message: "Quiz updated successfully",
      data: {},
    };
    res.status(200).send(resp);
  } catch (error) {
    next(error);
  }
};

const deleteQuiz = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const quizId = req.params.quizId;
    const quiz = await Quiz.findById(quizId);

    if (!quiz) {
      const err = new ProjectError("Quiz not found");
      err.statusCode = 404;
      throw err;
    }
    console.log(quiz);
    if (req.userId !== quiz.created_by.toString()) {
      const err = new ProjectError("you are not authorised");
      err.statusCode = 403;
      throw err;
    }

    if (quiz.is_published) {
      const err = new ProjectError("You cannot delete , published quize");
      err.statusCode = 405;
      throw err;
    }

    await Quiz.deleteOne({ _id: quizId });
    const resp: ReturnResponse = {
      status: "success",
      message: "Quiz deleted successfully",
      data: {},
    };
    res.status(200).send(resp);
  } catch (error) {
    next(error);
  }
};

const publishQuiz = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const quizId = req.body.quizId;
    const quiz = await Quiz.findById(quizId);

    if (!quiz) {
      const err = new ProjectError("Quiz not found");
      err.statusCode = 404;
      throw err;
    }

    if (req.userId !== quiz.created_by.toString()) {
      const err = new ProjectError("you are not authorized");
      err.statusCode = 403;
      throw err;
    }

    if (!!quiz.is_published) {
      const err = new ProjectError("Quiz is already published");
      err.statusCode = 405;
      throw err;
    }

    //  if(quiz.is_published === false && quiz.allowedUser.length ===0);
    //  const err = new ProjectError("Specify user for private");
    //  err.statusCode = 404;
    //  throw err;

    quiz.is_published = true;

    await quiz.save();
    const resp: ReturnResponse = {
      status: "success",
      message: "Quiz published successfully",
      data: {},
    };
    res.status(200).send(resp);
  } catch (error) {
    next(error);
  }
};

export { createQuiz, getQuiz, updateQuiz, deleteQuiz, publishQuiz };
