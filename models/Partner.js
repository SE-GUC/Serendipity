//The Partner Model
const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId
const Schema = mongoose.Schema

const partnerSchema = new Schema ({
    email: {
        type: String,
        required: true
    },
    id : {
        type : ObjectId ,
        required : true
    },
    username: {
        type: String ,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    partners: {
        type: [String] ,
        required: true
    },
    boardOfMembers: {
        type: [String] ,
        required: true
    },
    fieldOfWork : {
     type : String ,
     required : true 
    },
    vacancies : {
        type : [String]
    },
    pastProjects :{
        type : [String]
    }


}) ;





module.exports = Partner = mongoose.model('partners', partnerSchema)
