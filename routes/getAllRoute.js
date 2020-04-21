const express = require("express")
const router = express.Router()
const Data = require("../models/PostModel")


router.get("/", async (request, response)=>
{
     const data = await Data.find()
     console.log(data)
     response.json(data)
    
})


module.exports = router 