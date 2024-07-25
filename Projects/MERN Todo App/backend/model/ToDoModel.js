const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const todoSchema = new Schema({
    userName:String,
    mobile:String,
});

const Todo = mongoose.model("Todo", todoSchema );

module.exports =Todo;