const {Schema,model} = require("mongoose")

const Patientshema = new Schema({
    name:String,
    gender:String,
    age:Number
},
{
    timestamps:true
}
);

const Patients = model("Patient",Patientshema);

module.exports = Patients