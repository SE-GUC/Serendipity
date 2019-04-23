const mongoose = require ('mongoose')
const Schema = mongoose.Schema


const assessmentSchema = new Schema ({
   // _id: mongoose.Schema.Types.ObjectId,
   
    memberName: {
        type: String,
        required: true
    },
    expertName: {
        type: String,
        required: true
    },
    // masterClass: {
    //     type: String

    // },
    // educationalOrg: {
    //     type: String,
    //     required: true
    // },
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

// const mongoose = require('mongoose')


// const assessmentSchema  = mongoose.Schema({
//     _id: mongoose.Schema.Types.ObjectId,
//     memberName  : String ,
//     expertName  : String ,
//     phoneNumber  : Number ,
//     daysAvailable  : String

// })


// module.exports = mongoose.model('Assessment', assessmentSchema)