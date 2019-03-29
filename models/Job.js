
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Jobschema = new Schema({
    title: {
        type: String,
        required: true
    },
    state: {
        type: String,
        //required: true yan -> only admin can change that search for a way to have a default val of : submit/pending
    },
    location: {
        type: String,
        required: true
    },
    startdate: {
        type: Date,
       required: true
    },
    enddate: {
        type: Date,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
  
    dailyhours: {
        type: Number,
        required: true
    },
    partner: {
        type:Schema.Types.ObjectId, ref:'Partner',
     required: true
    },
    description: {
        type: String,
        
    },
    applicants: {
        type: [{type:Schema.Types.ObjectId, ref:'Member'}]
        
    }
})


module.exports = Job=mongoose.model('jobs', Jobschema)



