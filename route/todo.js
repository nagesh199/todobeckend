const {Router} = require("express");
const todosRouter = Router()
const  Todos  = require("../models/todo.model");

todosRouter.get("/:id", async(req,res)=>{
    try {
         const like = await Todos.findById(req.params.id).lean().exec();
         
         return res.status(200).send(like)
    }
    catch(err){
        return res.status(500).send({message:err.message})
    }
})
todosRouter.get("/", async(req,res)=>{
    try {
         const todo = await Todos.find().lean().exec();
         
         return res.status(200).send(todo)
    }
    catch(err){
        return res.status(500).send({message:err.message})
    }
});
todosRouter.post('/create',async(req,res)=>{
    try {
        const todo = await Todos.create(req.body);
    
        return res.status(200).send(todo)
     }
     catch(err){
          return res.status(500).send({message:err.message})
     }
})
todosRouter.patch("/edit/:id" , async(req,res)=>{
    try {
        const todo = await Todos.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
        }).lean().exec();

        return res.status(200).send(todo)
    }
    catch(err){
        return res.status(500).send({message:err.message})
    }
})
todosRouter.delete("/delete/:id" , async(req,res)=>{
    try {
        const todo = await Todos.findByIdAndDelete(req.params.id).lean().exec();

        return res.status(200).send(todo)
    }
    catch(err){
        return res.status(500).send({message:err.message})
    }
})
module.exports = todosRouter