const express = require("express")
const server = express()
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
require("dotenv/config")

server.use(bodyParser.json())

const routeForPosts = require("./routes/postRoute")

server.use("/post", routeForPosts)

const routeForGet = require("./routes/getAllRoute")

server.use("/getalldata", routeForGet)


mongoose.connect(process.env.URL,
{ useNewUrlParser: true , useUnifiedTopology: true}, () =>
{
    console.log("Connected with database successfull!")
})

server.listen(2000)

