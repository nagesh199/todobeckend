
   const mongoose= require('mongoose');


   const blogSchema= new mongoose.Schema({
     title:{type:String,required:true},
     category:{type:String,required:true},
     author:{type:String,required:true},
     content:{type:String,required:true},
     img_url:String,
     userId:String
     
   })

   const BlogModel= mongoose.model('blog',blogSchema)

   module.exports= BlogModel;
