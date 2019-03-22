//The Partner Model
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PartnerSchema = new Schema({
    email: {type: String, required: true}, //to do later: correct email syntax + unique
    name: {type: String,required: true},
    password: {type: String,required: true,/*minlength: 6*/},
    description: {type: String},
    partners: [{type: ObjectId, ref: 'Partner'}],
    boardOfMembers: {type: [String] },
    fieldOfWork: {type: String }, 
    vacancies: {type: [String]},
     pastProjects: {type: [String]}
})
module.exports = Partner = mongoose.model('partners', PartnerSchema)

////////////////
/*
class Partner{
    constructor(email, username, name, password, description, partners, boardOfMembers, fieldOfWork,
        vacancies,pastProjects) {
        this.email=email;
        this.username=username;
        this.name=name;
        this.password=password;
        this.description=description;
        this.partners=partners;
        this.boardOfMembers=boardOfMembers;
        this.fieldOfWork=fieldOfWork;
        this.vacancies=vacancies;
        this.pastProjects=pastProjects;
    };

}

module.exports = Partner;
*/