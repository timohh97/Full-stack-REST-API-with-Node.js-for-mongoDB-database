const express = require("express")
const router = express.Router()
const PostModel = require("../models/PostModel")


router.get("/", async (request, response)=>
{
     try{
     const data = await PostModel.find()
     console.log(data)
     response.json(data)
     }
     catch(error)
     {
          console.log(error)
          response.json(error)
     } 
    
})

router.get("/:dataId", async (request, response)=>
{
    try{
    const result = await PostModel.findById(request.params.dataId)
    console.log(result)
    response.json(result)
    }
    catch(error)
    {
       console.log(error)
       response.json(error)
    }
})




module.exports = router 