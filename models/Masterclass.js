const mongoose = require('mongoose')
const schema=mongoose.schema

const MasterclassSchema = new schema({
    title: {
        type: String,
        required: true
    },
    Eduorganizationid: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    price: {
        type: Number, 
        required: true
    },
    description: {
        type: String, 
        required: true
    },
    location: {
        type: String, 
        required: true
    },
    courseIDs: {
        type: [String], 
        required: true
    },
    workshopsIDs: {
        type: [String], 
        required: true
    },
    applicants:[String],
    required:true
})

module.exports = Masterclass = mongoose.model('masterclasses', MasterclassSchema)