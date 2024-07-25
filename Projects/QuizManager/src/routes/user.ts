// Redirect request to Particular method on Controller

import express from 'express';
import {registerUser, getUser, updateUser} from '../controllers/user';

const router = express.Router();

// POST/user/
router.post('/', registerUser);

//Get
router.get('/userId', getUser);

//update
router.put('/',updateUser);

export default router;