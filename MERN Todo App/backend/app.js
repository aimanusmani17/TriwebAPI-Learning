const express = require("express");
const mongoose = require("mongoose");


const todoRouter = require ("./router/ToDoRouter");
const app = express();
const cors= require('cors');
app.use(express.json());
app.use(cors());

app.use("/", todoRouter);

const uri =
  "mongodb+srv://myuser:abcd@mycluster.twqc0pp.mongodb.net/toDoApp?retryWrites=true&w=majority&appName=mycluster";
mongoose.set("strictQuery", false);


mongoose.connect(uri).then(() => {
  app.listen(3002);
  console.log("Server connected");
});