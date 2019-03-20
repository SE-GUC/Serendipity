const mongoose = require('mongoose')
const Schema = mongoose.Schema


const MasterclassSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    Eduorganizationid: {
        type: String
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
        type: [String]
        },
    workshopsIDs: {
        type: [String]
    },
    applicants:{
        type:[String]
    }
})

module.exports = Masterclass = mongoose.model('masterclasses', MasterclassSchema)