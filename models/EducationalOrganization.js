const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create the schema
const EducationalOrganizationSchema = new Schema({
 
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
        type: [{type: Schema.Types.ObjectId, ref: 'masterclasses'}]
    },
    courses:{
        type: [{type: Schema.Types.ObjectId, ref: 'Course'}]

    },
    workshops:{
        type: [{type: Schema.Types.ObjectId, ref: 'Workshop'}]

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

    },
    registered: {
        type: String, 
        default:'no',
        required: false
    }


})

module.exports = EducationalOrganization = mongoose.model('educationalOrganizations', EducationalOrganizationSchema)



