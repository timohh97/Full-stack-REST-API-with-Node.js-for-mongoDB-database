const express = require("express")
const router = express.Router()
const PostModel = require("../models/PostModel")


router.patch("/:dataId", async (request, response)=>
{
    try{
        const result = await PostModel.updateOne(
            {_id: request.params.dataId},
            { $set: {title: request.body.title, description: request.body.description} }
            )

        console.log(result)
        response.json(result)
        console.log("Patch request successful.")
    }
    catch(error)
    {
       console.log(error)
       response.json(error)
    }
})


module.exports = router