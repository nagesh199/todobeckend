
const {Schema,model} = require("mongoose")

const Useresshema = new Schema({
    name:String,
    email:String,
    username:String,
    hash:String  
},
{
    timestamps:true
}
);

const Users = model("User",Useresshema);

module.exports = Users