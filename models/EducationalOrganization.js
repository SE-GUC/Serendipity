const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create the schema
const EducationalOrganizationSchema = new Schema({
    // id: {
    //     type: Number,
    //     required: true
    // },
    userName: {
        type: String,
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
    email: {
        type: String, 
        required: true
    },
    masterClasses: {
<<<<<<< HEAD
        type: [{type: Schema.Types.ObjectId, ref: 'Masterclass'}]
    },
    courses:{
        type: [{type: Schema.Types.ObjectId, ref: 'Course'}]

    },
    workshops:{
        type: [{type: Schema.Types.ObjectId, ref: 'Workshop'}]
=======
        type: [String]
        //[{ type: Schema.Types.ObjectId, ref: 'MasterClass' }]
    },
    courses:{
        type: [String]
        //[{ type: Schema.Types.ObjectId, ref: 'Course' }]

    },
    workshops:{
        type: [String]
        //[{ type: Schema.Types.ObjectId, ref: 'Workshop' }]
>>>>>>> 72659733b017d8536aa75cb818d734d359a84bc6

    },
    trainers:{
        type: [String]

    },
    educators:{
        type: [String]

    },
    trainingPrograms:{
        type: [String]

    },
    description:{
        type: String

    },
    contract:{
        type: Boolean

    },
    expirationDate:{
        type: Date

    }


})

module.exports = EducationalOrganization = mongoose.model('educationalOrganizations', EducationalOrganizationSchema)





// const uuid = require('uuid')

// class EducationalOrganization{
//     constructor(userName, name, password, email, masterClasses, courses, workshops,
//         trainers, educators, trainingPrograms, description,contract,expirationDate) {
//         this.id = uuid.v4();
//         this.userName = userName;
//         this.name = name;
//         this.password = password;
//         this.email = email;
//         this.masterClasses = masterClasses;
//         this.courses = courses;
//         this.workshops = workshops;
//         this.trainers = trainers;
//         this.educators = educators;
//         this.trainingPrograms = trainingPrograms;
//         this.description = description;
//         this.contract = contract;
//         this.expirationDate = expirationDate;

// };
// }
// module.exports = EducationalOrganization;