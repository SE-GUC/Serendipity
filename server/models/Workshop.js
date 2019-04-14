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
    applicants  : [{type: mongoose.Schema.Types.ObjectId, ref: 'members'}] 

})


module.exports = mongoose.model('Workshop', workshopSchema)