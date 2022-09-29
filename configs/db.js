const mongoose = require("mongoose");

const connection = mongoose.connect("mongodb+srv://PreetiS123:mongodb123@cluster0.15tkpj3.mongodb.net/insta?retryWrites=true&w=majority");

module.exports = {connection}