const express=require('express')
const router=express.Router();
require ('../db/connection');
router.use(express.json())
const todoModel=require('../model/todoData');


router.get('/',async (req,res)=>{
    try{
    const data=await todoModel.find();
    res.status(200).send(data);
    }catch (error){
        res.status(404).send('data not found');
}
})
router.post('/add',async(req,res)=>{
    try {
        var item=req.body;
        const data1=new todoModel(item);
        const saveddata=await data1.save();
        res.status(200).send('post successful');
    } catch (error) {
        res.status(404).send('post unsuccessful');
    }
    
    })

    router.put('/edit/:id',async(req,res)=>{
        try {
            const id=req.params.id;
            const data=await todoModel.findByIdAndUpdate(id,req.body);
            res.status(200).send('Update successful');
        } catch (error) {
            res.status(404).send('Update unsuccessful');
        }
    
    })

    router.delete('/remove/:id',async(req,res)=>{
        try {
            const id=req.params.id;
            const data=await todoModel.findByIdAndDelete(id);
            res.status(200).send('Delete successful');
        } catch (error) {
            res.status(404).send('Delete unsuccessful');
        }
        
        })
    

module.exports=router