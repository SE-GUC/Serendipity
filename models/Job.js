

// const mongoose = require('mongoose')
// const ObjectId = mongoose.Schema.Types.ObjectId
// const Schema = mongoose.Schema
// const jobSchema = new Schema ({
//     id: {
//         type: ObjectId,
        
//     },
//     title : {
//         type : String ,
//         required : true
//     },
//     state : {
//         type: String ,
//         required: true
//     },
//     startdate: {
//         type: mongoose.Schema.Types.Date,
//         required: true
//     },
//     enddate: {
//         type:  mongoose.Schema.Types.Date,
//         required: true
//     },
//     skills :{
//         type : [String],
//         required : true 
//     },
//     location: {
//         type: String,
//         required: true
//     },
//     salary: {
//         type: Number ,
//         required: true
//     },
//     candidates: {
//         type: [String] ,
        
//     },
//     dailyhours : {
//      type : Number ,
//      required : true 
//     },
//     partner : {
//         type : String ,
//         required : true 
//     },
//     description :{
//         type : String ,
//         required : true
//     }


// }) ;



//module.exports = Job = mongoose.model('jobs', jobSchema)

// const mongoose = require('mongoose')
// const ObjectId = mongoose.Schema.Types.ObjectId
// const Schema = mongoose.Schema
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Jobschema = new Schema({
    title: {
        type: String,
        required: true
    },
    state: {
        type: String,
       required: true
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
     //   required: true
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



