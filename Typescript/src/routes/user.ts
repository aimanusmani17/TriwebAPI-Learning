
const express = require('express');
// const userController=require('../controllers/user ');;

import {registerUSer} from '../controllers/user';

const router = express.Router();

router.post('/register', registerUSer);

export default router;
