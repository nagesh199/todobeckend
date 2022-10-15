const express = require("express");
const app = express();
const cors = require("cors");
const productRouter = require("./route/product");
const { connection } = require("./configs/db")


app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

app.use("/product",productRouter)

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
