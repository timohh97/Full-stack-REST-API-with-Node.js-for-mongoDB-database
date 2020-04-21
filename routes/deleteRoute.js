const express = require("express")
const router = express.Router()
const PostModel = require("../models/PostModel")


router.delete("/:dataId", async (request, response)=>
{
    try{
    const result = await PostModel.remove({_id: request.params.dataId})
    console.log(result)
    response.json(result)
    console.log("Deleted successful.")

    }
    catch(error)
    {
       console.log(error)
       response.json(error)
    }
})




module.exports = router 