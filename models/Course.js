

const mongoose = require('mongoose')


const courseSchema  = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title  : String ,
    eduOrganisation  : String ,
    duration  : Number ,
    educator  : String ,
    price  : Number ,
    description  : String ,
    location  : String ,
    applicants  : Array//[mongoose.Schema.Types.ObjectId] 
})


module.exports = mongoose.model('Course', courseSchema)

