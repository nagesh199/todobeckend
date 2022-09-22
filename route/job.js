const {Router} = require("express");
const jobsRouter = Router()
const  Jobs  = require("../models/job.model");

jobsRouter.get("/get/:id", async(req,res)=>{
    try {
         const job = await Jobs.findById(req.params.id).lean().exec();
         
         return res.status(200).send(job)
    }
    catch(err){
        return res.status(500).send({message:err.message})
    }
})
jobsRouter.get("/", async(req,res)=>{
    try {
         const job = await Jobs.find().lean().exec();
         
         return res.status(200).send(job)
    }
    catch(err){
        return res.status(500).send({message:err.message})
    }
});
jobsRouter.post('/create',async(req,res)=>{
    try {
        const job = await Jobs.create(req.body);
    
        return res.status(200).send(job)
     }
     catch(err){
          return res.status(500).send({message:err.message})
     }
})
jobsRouter.get("/search/:key" , async(req,res)=>{

    try {
        const job = await Jobs.find(
            {
                "$or":[
                    {"companyName":{$regex:req.params.key}},
                    {"role":{$regex:req.params.key}},
                    {"location":{$regex:req.params.key}}
                ]
            }
        ).lean().exec();

        return res.status(200).send(job)
    }
    catch(err){
        return res.status(500).send({message:err.message})
    }
})

module.exports = jobsRouter