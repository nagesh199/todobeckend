const {Router} = require("express");
const Mediciens = require("../models/medicien.model");
const medicienRouter = Router()


medicienRouter.get("/:patientId", async(req,res)=>{
    console.log(req.params.patientId)
    try {
         const medicien = await Mediciens.find().lean().exec();
         console.log(medicien)
         return res.status(200).send(medicien)
    }
    catch(err){
        return res.status(500).send({message:err.message})
    }
})
medicienRouter.get("/", async(req,res)=>{
    try {
         const medicien = await Mediciens.find().populate("patientId").lean().exec()
         
         return res.status(200).send(medicien)
    }
    catch(err){
        return res.status(500).send({message:err.message})
    }
});
medicienRouter.post('/',async(req,res)=>{
    try {
        const medicien = await Mediciens.create(req.body);
    
        return res.status(200).send(medicien)
     }
     catch(err){
          return res.status(500).send({message:err.message})
     }
})

medicienRouter.delete("/delete/:id" , async(req,res)=>{
    try {
        const medicien = await Mediciens.findByIdAndDelete(req.params.id).lean().exec();

        return res.status(200).send(medicien)
    }
    catch(err){
        return res.status(500).send({message:err.message})
    }
})
module.exports = medicienRouter