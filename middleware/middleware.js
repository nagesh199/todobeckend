const jwt = require("jsonwebtoken");

const auth =(req,res,next)=>{
    if(!req.headers.authorization){
        return res.send("Please login again")
    }
    const token = req.headers.authorization.split(" ")[1]
    jwt.verify(token, "SECRET12345", function(err, decoded) {
            if(err){
                res.send("Please login")
            }
            else{
                req.body.userId = decoded.userId
                next()
            }
        });
}
module.exports = auth