const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Jobschema = new Schema({
    title: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    startdate: {
        type: Date,
        required: true
    },
    enddate: {
        type: Date,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    applicants: {
        type: [String],
        
    },
    dailyhours: {
        type: Number,
        required: true
    },
    partner: {
        type: String,
        required: true
    },
    description: {
        type: Date,
        
    },
})


module.exports = Job=mongoose.model('jobs', Jobschema)

//const uuid = require('uuid')
// class Job {
//     constructor(title,state, startdate,enddate, location,salary,dailyhours,partner,description,candidates) {
//        // this.id= uuid.v4();
//         this.title = title;
//         this.state=state;
//         this.startdate=startdate;
//         this.enddate=enddate
//         this.location=location;
//         this.salary=salary;
//         this.candidates=candidates;
//         this.dailyhours=dailyhours;
//         this.partner=partner;
//         this.description=description;
//     };
// }

