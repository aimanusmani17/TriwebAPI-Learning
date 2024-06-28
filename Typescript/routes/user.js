const express = require ('express');
// const userController=require('../controllers/user ');;
const [registerUSer] = require ('../controllers/user');

const router= express.Router();


router.post('/register', registerUSer);
module.exports=router;