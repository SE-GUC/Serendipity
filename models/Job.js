const mongoos = require('mongoose')
const ObjectId = mongoos.Schema.Types.ObjectId
const Schemaa = mongoos.Schema
const jobSchema = new Schemaa ({
    id: {
        type: ObjectId,
        
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
        type: Date,
        required: true
    },
    enddate: {
        type:  Date,
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



module.exports = Job = mongoos.model('jobs', jobSchema)




