const mongoose = require("mongoose")

const PostPattern = mongoose.Schema({
    title: {
       type: String,
       required: true 
    },
    description: {
        type: String,
        required: true 
     }
})


module.exports = mongoose.model("Posts", PostPattern)