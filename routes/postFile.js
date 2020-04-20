const express = require("express")
const router = express.Router()
const Post = require("../models/PostModel")

router.post("/", (request, response)=>
{
    console.log(request.body)

    const postaction = new Post({
        title: request.body.title,
        description: request.body.description
    })

    

    //postaction.save()
    //.then(data => {
    //   response.json(data)
    //})
    //.catch(error =>
    //    {
    //        response.json({message: error})
    //    })
})


module.exports = router 