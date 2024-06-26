
const db=require('../util/database');

module.exports.insert= async (userData)=>{
    console.log(userData);

    let id=0;
  
  try{

    let query= "INSERT INTO `users`(`name`, `email`, `password`, `remark`) VALUES (?,?,?,?)";
    //execute
    let result=await db.execute(query,[userData.name,userData.email,userData.password,userData.remark]);

    console.log(result);

    id= result[0].insertId;
  }
  catch(error){
    console.log(error);
   

  }
  return id;

}

module.exports.get= async(userData)=>{
 
  let retData='';
  try{
    let query= "SELECT * FROM `users` WHERE id=? ";
    let result=await db.execute(query,[userData.id]);
    retData=result[0][0];

  }catch(error){
    console.log(error);

  }
  return retData;
}
