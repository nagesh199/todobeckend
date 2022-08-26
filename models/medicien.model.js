const {Schema,model, default: mongoose} = require("mongoose")

const Medicienshema = new Schema({
    name:String,
    quantity:Number,
    patientId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Patient",
        required:true
    }
},
{
    timestamps:true
}
);

const Mediciens = model("mediciens",Medicienshema);

module.exports = Mediciens