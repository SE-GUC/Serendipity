const mongoose = require ('mongoose')
const Schema = mongoose.Schema


const assessmentSchema = new Schema ({
    memberName: {
        type: String,
        required: true
    },
    expertName: {
        type: String,
        required: true
    },
    masterClass: {
        type: String

    },
    educationalOrg: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String
    },
    daysAvailable: {
        type: String,
        required: true
    },
    status: {
        type: String
    }

})
module.exports = Assessment = mongoose.model('Assessments', assessmentSchema)
