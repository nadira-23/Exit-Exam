const express=require ('express');
const app=new express();
require('dotenv').config();
const PORT=process.env.PORT;
require('./db/connection')
const todo=require('./routes/todo');
app.use ('/todo',todo);
const todoData=require ('./model/todoData');



app.listen(PORT,()=>{
    console.log(`Server runnning on PORT ${PORT}`)
})
