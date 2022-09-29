const express = require("express");
const app = express();
const { connection } = require("./configs/db")
const authRouter= require('./route/auth');
const blogRouter= require('./route/blog');
const cors = require("cors")

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());


app.use('/auth',authRouter);
app.use('/blog',blogRouter);
app.get("/",(req,res)=>{
    console.log(req.session)
    return res.send("hello world")
})
const PORT = process.env.PORT || 8080
app.listen(PORT,async()=>{
    try {
        await connection
        console.log("connection success")
    }
    catch{
        console.log("feild connection")
    }
    console.log("Server strated on http://localhost:8080")
})
