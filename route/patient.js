const {Router} = require("express");
const PatientRouter = Router()
const  Patient  = require("../models/patient.model");


PatientRouter.get("/", async(req,res)=>{
    try {
         const patent = await Patient.find().lean().exec();
         
         return res.status(200).send(patent)
    }
    catch(err){
        return res.status(500).send({message:err.message})
    }
});
PatientRouter.get("/get/:id", async(req,res)=>{
    try {
         const patent = await Patient.findById(req.params.id).lean().exec();
         
         return res.status(200).send(patent)
    }
    catch(err){
        return res.status(500).send({message:err.message})
    }
});
PatientRouter.post('/',async(req,res)=>{
    try {
        const patent = await Patient.create(req.body);
    
        return res.status(200).send(patent)
     }
     catch(err){
          return res.status(500).send({message:err.message})
     }
})
PatientRouter.get('/:search',async(req,res)=>{

    try {
        const patent = await Patient.find({name: req.params.search});
    
        return res.status(200).send(patent)
     }
     catch(err){
          return res.status(500).send({message:err.message})
     }
})
PatientRouter.get('/sort/acc',async(req,res)=>{
    try {
        const patent = await Patient.find().sort({age:1})
    
        return res.status(200).send(patent)
     }
     catch(err){
          return res.status(500).send({message:err.message})
     }
})
PatientRouter.get('/gender/:gender',async(req,res)=>{
    try {
        const patent = await Patient.find({gender: req.params.gender});
    
        return res.status(200).send(patent)
     }
     catch(err){
          return res.status(500).send({message:err.message})
     }
})
PatientRouter.delete('/delete/:id',async(req,res)=>{
    try {
        const patent = await Patient.findByIdAndDelete(req.params.id);
    
        return res.status(200).send(patent)
     }
     catch(err){
          return res.status(500).send({message:err.message})
     }
})


module.exports = PatientRouter