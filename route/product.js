const {Router} =require("express")
const Products = require("../model/product.model")


const productRouter = Router()

productRouter.get("/get", async(req,res)=>{
    try {
        
        let data = await Products.find()
        return res.status(200).send(data)
    }
    catch(err){
          return res.status(500).send({message:err.message})
    }
})
productRouter.get("/get/:id", async(req,res)=>{
    try {
        let data = await Products.findById(req.params.id);
        return res.status(200).send(data)
    }
    catch(err){
        return res.status(500).send({message:err.message})
    }
})
productRouter.get("/search/:key" , async(req,res)=>{

    try {
        const data = await Products.find(
            {
                "$or":[
                    {title:{$regex:req.params.key}},
                    // {category:{$regex:req.params.key}}
                ]
            }
        )

        return res.status(200).send(data)
    }
    catch(err){
        return res.status(500).send({message:err.message})
    }
})
module.exports = productRouter

    



