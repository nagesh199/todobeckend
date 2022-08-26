const express = require("express");
const app = express();
const { connection } = require("./configs/db")
const session = require("express-session");
const useresRouter = require("./route/user");
const PatientRouter = require("./route/patient");
const cors = require("cors");
const medicienRouter = require("./route/medicien");

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

app.use(session({secret:"COOKIESECERT",resave:false,saveUninitialized:true}))

app.use("/user",useresRouter)
app.use("/patient",PatientRouter)
app.use("/medicien",medicienRouter)
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
