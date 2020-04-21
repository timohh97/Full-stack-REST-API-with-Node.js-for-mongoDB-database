const express = require("express")
const server = express()
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
require("dotenv/config")

const routeForPost = require("./routes/postRoute")
const routeForGet = require("./routes/getRoute")
const routeForDelete = require("./routes/deleteRoute")
const routeForUpdate = require("./routes/updateRoute")

server.use(bodyParser.json())
server.use("/post", routeForPost)
server.use("/get", routeForGet)
server.use("/delete",routeForDelete)
server.use("/patch",routeForUpdate)


mongoose.connect(process.env.URL,
{ useNewUrlParser: true , useUnifiedTopology: true}, () =>
{
    console.log("Connected with database successfull!")
})

server.listen(2000)

