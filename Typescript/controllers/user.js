const [addUserToDB]= require('../models/user')

const registerUSer =(req,res)=>{

    // fetch data from request
    // validation
    // normalize

    

    const userName="Aiman";
    const password="password";

    const result= addUserToDB(userName,password);

    res.send("USer Registration ");

}

module.exports= [registerUSer]