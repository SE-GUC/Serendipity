
const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId
const Schema = mongoose.Schema
const jobSchema = new Schema ({
    id: {
        type: ObjectId,
        required: true
    },
    title : {
        type : String ,
        required : true
    },
    state : {
        type: String ,
        required: true
    },
    startdate: {
        type: mongoose.Schema.Types.Date,
        required: true
    },
    enddate: {
        type:  mongoose.Schema.Types.Date,
        required: true
    },
    skills :{
        type : [String],
        required : true 
    },
    location: {
        type: String,
        required: true
    },
    salary: {
        type: Number ,
        required: true
    },
    candidates: {
        type: [String] ,
        
    },
    dailyhours : {
     type : Number ,
     required : true 
    },
    partner : {
        type : String ,
        required : true 
    },
    description :{
        type : String ,
        required : true
    }


}) ;



module.exports = Job = mongoose.model('jobs', jobSchema)