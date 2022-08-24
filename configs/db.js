const mongoose = require("mongoose");

const connection = mongoose.connect("mongodb+srv://nageshkumawat:nagesh12345@cluster0.rdlsg.mongodb.net/test");

module.exports = {connection}
