// const uuid = require('uuid')

// class Course {
//     constructor(title, eduOrganisation, duration, educator, price, decription, location) {
//         this.id = uuid.v4();
//         this.title = title;
//         this.eduOrganisation = eduOrganisation;
//         this.duration = duration;
//         this.educator = educator;
//         this.price = price;
//         this.description = decription;
//         this.location = location;
//     };
// }

// module.exports = Course;

const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create the schema
const BookSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    eduOrganisation: {
        type: string,
        required: true
    },
    duration: {
        type: Number, 
        required: true
    },
    educator: {
        type: string,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    decription: {
        type: string,
        required: true
    },
    location: {
        type: string,
        required: true
    }

})

module.exports = Book = mongoose.model('Course', CourseSchema)