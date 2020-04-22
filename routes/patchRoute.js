const express = require("express")
const router = express.Router()
const PostModel = require("../models/PostModel")


router.patch("/:dataId", async (request, response)=>
{
    try{
        const result = await PostModel.updateOne(
            {_id: request.params.dataId},
            { $set: {firstName: request.body.firstName, 
                lastName: request.body.lastName,
                age: request.body.age,
                birthday: request.body.birthday,
                job: request.body.job,
                description: request.body.description
            } }
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