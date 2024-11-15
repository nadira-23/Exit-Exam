const mongoose=require('mongoose');
const todoSchema=mongoose.Schema({
id:String,
Task:String
})

const todoData=mongoose.model('todos',todoSchema);
module.exports=todoData;