const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId
const Schema = mongoose.Schema
const partnerSchema = new Schema ({
    userName: {
        type: String,
        required: true
    },
    id  :
    {
     type : ObjectId
    },
    availableDailyHours: {
        type : Number ,
        required : true
    },
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String ,
        required: true
    },
    birthDate: {
        type: Date ,
        required: true
    },
    interests : {
     type : [String] ,
    
    },
    attendedEvents : {
        type : [String]
    },
    previousJobs :{
        type : [String]
    },
    previousTasks :{
        type : [String]
    },
    previousProjects :{
        type : [String]
    },
    reviews :{
    type : Number
    },
    reviewers :{
type : [String]
    },
    certificates :{
        type : [String]
    },
    coursesTaken :{
        type : [String]
    },
    contractSigned :{
        type : Boolean
    },
    expirationDate :{
        type : Date
    },
    age :{
        type : Number
    },
    skills :{
        type : [String],
        required : true
    }
    
});

module.exports = Member = mongoose.model('members', partnerSchema)


// -Added viewing applicants to a course(front and back end)
// -Added viewing applicants to a workshop(back end)