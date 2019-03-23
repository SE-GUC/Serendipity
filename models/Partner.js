//The Partner Model
const mongoose = require('mongoose')

const ObjectId = mongoose.Schema.Types.ObjectId
const Schema = mongoose.Schema

const PartnerSchema = new Schema({
    _id: {type: Schema.ObjectId, auto: true},
    email: {type: String, required: true},
    name: {type: String,required: true},
    password: {type: String,required: true},
    description: {type: String},
    partners: [{type: Schema.Types.ObjectId, ref: 'Partner'}],
    boardOfMembers: {type: [String] },
    fieldOfWork: {type: String }, 
    vacancies: [{type: Schema.Types.ObjectId, ref: 'Job'}],
    pastProjects: {type: [String]}
})
module.exports = Partner = mongoose.model('partners', PartnerSchema)

