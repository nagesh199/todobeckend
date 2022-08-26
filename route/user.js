const {Router} = require("express");
const useresRouter = Router()
const  Users  = require("../models/user.model");
const jwt = require("jsonwebtoken");
const crypto = require("node:crypto");



useresRouter.get("/", async(req,res)=>{
    const user = await Users.find();
    return res.json(user)

    
})

useresRouter.post("/signup",(req,res)=>{
    const {username,password,name,email,address} = req.body
    const hash = crypto.pbkdf2Sync(password,"SECERTSALT1234",60,64,"sha256").toString("hex")
    const user = new Users({username,hash,name,email,address})
    console.log(user)
    user.save().then(()=>{
        res.send(user)
    })
})
useresRouter.post("/signin", async(req,res)=>{
    const {username,password} = req.body;
    const user = await Users.findOne({username});

    const hash = crypto.pbkdf2Sync(password,"SECERTSALT1234",60,64,"sha256").toString("hex")
  
    if(hash !== user.hash){
        return res.send("Invalid credatiol")
    }
    else if(username != user.username){
        return res.send("Invalid credatiol")
    }
    const token = jwt.sign({name:user.name,age:user.age},"SECRET12345")
    return res.send({message:"Signe success",token,user})
})
useresRouter.get("/profile/:id", async(req,res)=>{
    const user = await Users.findById(req.params.id);
    const token = req.headers["authorization"].split(" ")[1]||"";
    try {
     const decoded = jwt.verify(token,"SECRET12345")
     console.log(decoded)
     if(decoded){
        return res.send(user)
     }
     return res.status(403).send("Forbidden")
    }
    catch(err){

    }
})
module.exports = useresRouter