const express = require("express")
const router = express.Router()
const PostModel = require("../models/PostModel")

router.post("/", (request, response)=>
{
    console.log("The post request is: "+request.body)

    const postaction = new PostModel({
        title: request.body.title,
        description: request.body.description
    })

    
    postaction.save().then(result =>
        {
            response.json(result)
            console.log(result)
        })
        .catch(error => {
            
            response.json(error)
            console.log(error)
        })
})


module.exports = router 