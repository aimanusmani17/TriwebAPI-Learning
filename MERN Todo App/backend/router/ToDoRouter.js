const { createToDo,
     getToDo,
     updateToDo, 
     deleteToDo
 }=  require ("../controller/ToDoController");
const express = require ("express");

const router= express.Router();

// POST
router.post("/", createToDo);
  
  // PUT
  router.get("/", getToDo);
  
  //    PUT
 router.put("/", updateToDo)
  
  // DELETE
  router.delete("/", deleteToDo)

module.exports = router;