
const mongoose = require('mongoose')


const workshopSchema  = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title  : String ,
    eduOrganisation  : String ,
    duration  : Number ,
    educator  : String ,
    price  : Number ,
    description  : String ,
    location  : String ,
    applicants  : [{type : Schema.Types.ObjectId,ref:'Member'}] 
})


module.exports = mongoose.model('Workshop', workshopSchema)
