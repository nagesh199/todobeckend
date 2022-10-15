const {Schema,model} = require("mongoose")

const Scootyshema = new Schema({

}
);

const Products = model("products",Scootyshema);

module.exports = Products