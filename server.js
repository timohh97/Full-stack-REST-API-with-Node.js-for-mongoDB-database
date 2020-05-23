const express = require("express")
const server = express()
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require("cors")
require("dotenv/config")

server.use(express.static("Frontend"))

const routeForPost = require("./routes/postRoute")
const routeForGet = require("./routes/getRoute")
const routeForDelete = require("./routes/deleteRoute")
const routeForPatch = require("./routes/patchRoute")

server.use(cors())
server.use(bodyParser.json())
server.use("/post", routeForPost)
server.use("/get", routeForGet)
server.use("/delete",routeForDelete)
server.use("/patch",routeForPatch)


mongoose.connect(process.env.URL,
{ useNewUrlParser: true , useUnifiedTopology: true}, () =>
{
    console.log("Connected with database successfull!")
})

var port = process.env.PORT || 2000;
server.listen(port)



