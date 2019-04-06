const uuid = require('uuid')
class Job {
    constructor(title,state, startdate,enddate, location,salary,dailyhours,partner,description,candidates) {
        this.id= uuid.v4();
        this.title = title;
        this.state=state;
        this.startdate=startdate;
        this.enddate=enddate
        this.location=location;
        this.salary=salary;
        this.candidates=candidates;
        this.dailyhours=dailyhours;
        this.partner=partner;
        this.description=description;
    };
}

module.exports = Job