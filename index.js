const express = require("express");
const app = express();
const { connection } = require("./configs/db")
const session = require("express-session");
const useresRouter = require("./route/user");
const todosRouter = require("./route/todo");
const cors = require("cors")

const PORT = process.env.PORT || 8080

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

app.use(session({secret:"COOKIESECERT",resave:false,saveUninitialized:true}))

app.use("/user",useresRouter)
app.use("/todo",todosRouter)
app.get("/",(req,res)=>{
    console.log(req.session)
    return res.send("hello world")
})
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
