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
        type: String,
        required: true

    },
    educationalOrg: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number
    },
    daysAvailable: {
        type: String,
        required: true
    }

})




module.exports = Assessment = mongoose.model('Assessments', assessmentSchema)
