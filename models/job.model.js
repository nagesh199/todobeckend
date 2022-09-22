const {Schema,model} = require("mongoose")

const jobSchema = new Schema({
    imgUrl:String,
    companyName:String,
    role:String,
    postDate:String,
    position:String,
    location:String,
    type:String,
    salary:String

},
{
    timestamps:true
}
);

const Jobs = model("job",jobSchema);

module.exports = Jobs