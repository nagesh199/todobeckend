const express = require("express");
const BlogModel = require("../models/Blog.model");


const blogController = express.Router();


blogController.post("/create",async(req,res)=>{
    const {title,category,author,content,img_url,userId} = req.body
    const new_blog = new BlogModel({
        title,
        category,
        author,
        content,
        img_url,
        userId
    })
    await new_blog.save()
    res.send({"message":"note created",new_blog})
})

blogController.get("/",async(req,res)=>{
    const {userId} = req.body;
    const blog = await BlogModel.find({userId})
    res.send(blog)
})

blogController.patch("/edit/:id",async(req,res)=>{
     try{
          const blog=await BlogModel.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
          })
          return res.status(200).send(blog)
     }
     catch(err){
        return res.status(500).send({message:err.message})
    }

  
})


blogController.delete("/delete/:id",async(req,res)=>{
    try {
        const blog = await BlogModel.findByIdAndDelete(req.params.id)

        return res.status(200).send("Deleted")
    }
    catch(err){
        return res.status(500).send({message:err.message})
    }
   
 })


 
blogController.get("/category/:category",async(req,res)=>{
    try {
        const blog = await BlogModel.find({category: req.params.category});
    
        return res.status(200).send(blog)
     }
     catch(err){
          return res.status(500).send({message:err.message})
     }
})

blogController.get("/author/:author",async(req,res)=>{
    try {
        const blog = await BlogModel.find({author: req.params.author});
    
        return res.status(200).send(blog)
     }
     catch(err){
          return res.status(500).send({message:err.message})
     }
})



module.exports = blogController