const express = require("express")
const server = express()
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
require("dotenv/config")

server.use(bodyParser.json())

const routeForPosts = require("./routes/postFile")

server.use("/posts", routeForPosts)


mongoose.connect(process.env.URL,
{ useNewUrlParser: true , useUnifiedTopology: true}, () =>
{
    console.log("Connected with database successfull!")
})

server.listen(2000)

