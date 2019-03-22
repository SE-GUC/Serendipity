const mongoose = require ('mongoose')

const assessmentSchema = mongoose.Schema ({
    ID : mongoose.Schema.Types.ObjectId,
    memberName : String,
    expertName : String,
    masterClass : String,
    educationalOrg :String, 
    phoneNumber : Number,
    daysAvailable : String
})


module.exports = mongoose.model('Assessment', assessmentSchema)
