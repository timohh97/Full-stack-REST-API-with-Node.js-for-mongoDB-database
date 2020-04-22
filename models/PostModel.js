const mongoose = require("mongoose")

const PostPattern = mongoose.Schema({
    firstName: {
       type: String,
       required: true 
    },
    lastName: {
        type: String,
        required: true 
     },
   age: {
      type: Number,
      required: true
   },
   birthday:{
       type: String,
       required: true
   },
   job: {
      type: String,
      required: true
   },
   description:{
      type: String,
      required: true
   }
})


module.exports = mongoose.model("Posts", PostPattern)