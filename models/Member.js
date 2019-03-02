class Member {

    constructor(  userName, availableDailyHours, location, name, email, password, birthDate , interests , attendedEvents , previousJobs , previousTasks , previousProjects , reviews , reviewers , certificates , coursesTaken , contractSigned , expirationDate , age ) {
        this.userName = userName;
        this.availableDailyHours = availableDailyHours;
        this.location = location;
        this.name = name;
        this.email = email;
        this.password = password;
        this.birthDate = birthDate;
        this.interests = interests;
        this.attendedEvents = attendedEvents;  
        this.previousJobs = previousJobs; 
        this.previousTasks = previousTasks;
        this.previousProjects = previousProjects;
        this.reviews = reviews ;
        this.reviewers = reviewers;
        this.certificates = certificates;
        this.coursesTaken = coursesTaken;
        this.contractSigned = contractSigned;
        this.expirationDate = expirationDate ;
        this.age = age ;
    };
}

module.exports = Member;