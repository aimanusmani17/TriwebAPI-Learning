
const express = require('express');
// const userController=require('../controllers/user ');;

import {registerUSer, checkTypesAndInterface} from '../controllers/user';

const router = express.Router();

router.post('/register', registerUSer);
router.post('/update', checkTypesAndInterface);

export default router;
