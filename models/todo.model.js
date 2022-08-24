const {Schema,model} = require("mongoose")

const Todosshema = new Schema({
    taskname:String,
    status:String,
    tag:String
},
{
    timestamps:true
}
);

const Todos = model("Todo",Todosshema);

module.exports = Todos