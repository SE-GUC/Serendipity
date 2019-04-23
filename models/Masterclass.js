const mongoose = require('mongoose')

const Schema = mongoose.Schema





const MasterclassSchema = new Schema({

    title: {

        type: String,

        required: true

    },

    Eduorganization: {

        type: String,

        required: true

        // type: Schema.Types.ObjectId,
        // ref: "EducationalOrganization"
    },

    duration: {

        type: String,

        required: true

    },

    price: {

        type: Number, 

        required: true

    },

    description: {

        type: String, 

        required: true

    },

    location: {

        type: String, 

        required: true

    },

    courseIDs: {

        type: [{type:Schema.Types.ObjectId, ref: 'Course'}]

        },

    workshopsIDs: {

        type: [{type:Schema.Types.ObjectId, ref: 'Workshop'}]

    },

    applicants:{

        type: [{type:Schema.Types.ObjectId, ref: 'members'}]

    }

})



module.exports = Masterclass = mongoose.model('masterclasses', MasterclassSchema)