const mongoose = require('mongoose')
const Schema=mongoose.Schema

const MasterclassSchema = new Schema({
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
    applicants:{
        type:[String],
        required:true
    }
})

module.exports = Masterclass = mongoose.model('masterclasses', MasterclassSchema)