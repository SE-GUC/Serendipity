class Job {
    constructor(title,state, duration, location,salary,candidates,dailyhours,partner,description) {
        this.title = title;
        this.state=state;
        this.duration=duration;
        this.location=location;
        this.salary=salary;
        this.candidates=candidates;
        this.dailyhours=dailyhours;
        this.partner=partner;
        this.description=description;
    };
}

module.exports = Job