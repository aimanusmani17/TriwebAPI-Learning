
import express from 'express';
import {getUser,updateUser} from '../controllers/user';
import {isAuththenticated} from '../middlewares/isAuth';

const router = express.Router();
//user should be authenticate
//user should be authorised
//Get
router.get('/:userId',isAuththenticated, getUser);

//update
router.put('/',updateUser);

export default router;