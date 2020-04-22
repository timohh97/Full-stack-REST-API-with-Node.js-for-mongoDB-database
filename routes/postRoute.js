const express = require("express")
const router = express.Router()
const PostModel = require("../models/PostModel")

router.post("/", (request, response) => {
    console.log("The post request is: " + request.body)

    const postaction = new PostModel({
        firstName: request.body.firstName,
        lastName: request.body.lastName,
        age: request.body.age,
        birthday: request.body.birthday,
        job: request.body.job,
        description: request.body.description
    })


    postaction.save().then(result => {
        response.json(result)
        console.log(result)
        console.log("Post request successful.")
    })
        .catch(error => {

            response.json(error)
            console.log(error)
        })


})


module.exports = router 