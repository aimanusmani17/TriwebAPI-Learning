const Todo = require ('../model/TodoModel');

const createToDo = async (req, res) => {
   try {

    const todo = new Todo(req.body);
    const result= await todo.save();

     res.send({
    status: "success",
    message: " To do Created successfully",
    _id: result._id,
 });
    
   } catch (error) {

    res.send({
        status: "error",
        message: " To do Created failed",
        _id: result._id,
     });
    
  
    
}
}

const getToDo = async (req, res) => {

    try {
        const todos = await Todo.find({});
        res.send({
          status: "success",
          message: "Todo Get successfully",
          data: todos,
        });
        
       } catch (error) {
    
        res.send({
            status: "error",
            message: " To do Created failed",
            error,
         });
        
      
        }    
    
    
   
 };


 const updateToDo = async (req, res) => {
    try {
        const id = req.body._id;
        // record find
        const todo = await Todo.findById(id);
        // change set
        todo.userName = req.body.userName;
        todo.mobile = req.body.mobile;
        // save
        await todo.save();
        
        res.send({
          status: "success",
          message: "Todo update successfully",
        });
        
       } catch (error) {
    
        res.send({
            status: "error",
            message: " To do update failed",
            error,
         });
        
      
        }    
    
    
   
 };

 const deleteToDo = async (req, res) => {
    try {

        const id = req.body._id;
   
    const todo = await ToDo.findById(id);
    await todo.delete();
       
         res.send({
          status: "success",
          message: "Todo delete successfully",
          data: todos,
        });
        
       } catch (error) {
    
        res.send({
            status: "error",
            message: " To do delete failed",
            error,
         });
        
      
        }    
    
    
 };

module.exports = { createToDo , getToDo,updateToDo, deleteToDo};