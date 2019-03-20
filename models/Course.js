const uuid = require('uuid')

class Course {
    constructor(title, eduOrganisation, duration, educator, price, decription, location, applicants) {
        this.id = uuid.v4();
        this.title = title;
        this.eduOrganisation = eduOrganisation;
        this.duration = duration;
        this.educator = educator;
        this.price = price;
        this.description = decription;
        this.location = location;
        this.applicants = applicants;
    };
}

module.exports = Course;