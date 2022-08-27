const {Schema,model} = require("mongoose")

const Urlshema = new Schema({
    urlCode:String,
    longUrl:String,
    shortUrl:String
}
);

const Urls = model("Url",Urlshema);

module.exports = Urls