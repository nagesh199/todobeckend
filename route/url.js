const {Router} =require("express")
const Urls = require("../model/url.model")
const validUrl = require("valid-url");
const shortid = require("shortid");

const urlRouter = Router()

const baseUrl = "http://localhost:4000"
urlRouter.post("/shorten" , async(req,res)=>{
    const {longUrl} = req.body 
    if (!validUrl.isUri(baseUrl)) {
        return res.status(401).json('Invalid base URL')
    }

    const urlCode = shortid.generate()

    if (validUrl.isUri(longUrl)) {
        try {
           
            let url = await Urls.findOne({
                longUrl
            })

            
            if (url) {
                res.json(url)
            } else {
              
                const shortUrl = baseUrl + '/' + urlCode

               
                url = new Urls({
                    longUrl,
                    shortUrl,
                    urlCode,
                    date: new Date()
                })
                await url.save()
                res.json(url)
            }
        }
        catch (err) {
            console.log(err)
            res.status(500).json('Server Error')
        }
    } else {
        res.status(401).json('Invalid longUrl')
    }
});

urlRouter.get("/" ,async(req,res)=>{
    try {
       const url = await Urls.find();
       return res.status(202).send(url)
    }
    catch(err) {
       return res.status(401).send({message:err.message})
    }
})

urlRouter.get("/:code" , async(req,res)=>{
   try {
      const url = await Urls.findOne({urlCode: req.params.code});
      return res.status(202).send(url)
   }
   catch(err){
       return res.status(401).send({message:err.message})
   }
})

module.exports = urlRouter
    



