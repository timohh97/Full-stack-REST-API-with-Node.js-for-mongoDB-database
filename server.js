const express = require("express")
const server = express()
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
require("dotenv/config")

server.use(bodyParser.json())

const routeForPost = require("./routes/postRoute")

server.use("/post", routeForPost)

const routeForGet = require("./routes/getRoute")

server.use("/get", routeForGet)



mongoose.connect(process.env.URL,
{ useNewUrlParser: true , useUnifiedTopology: true}, () =>
{
    console.log("Connected with database successfull!")
})

server.listen(2000)

