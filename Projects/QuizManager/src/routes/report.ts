import express  from "express";
import {getReport} from '../controllers/report' ;
import { isAuththenticated } from "../middlewares/isAuth";

const router = express.Router();


 router.get("/:reportId?", isAuththenticated, getReport);


 export default router;