class EducationalOrganization{
    constructor(id, userName, name, password, email, masterClasses, courses, workshops,
        trainers, educators, trainingPrograms, description,contract,expirationDate) {
        this.id = id;
        this.userName = userName;
        this.name = name;
        this.password = password;
        this.email = email;
        this.masterClasses = masterClasses;
        this.courses = courses;
        this.workshops = workshops;
        this.trainers = trainers;
        this.educators = educators;
        this.trainingPrograms = trainingPrograms;
        this.description = description;
        this.contract = contract;
        this.expirationDate = expirationDate;

};
}
module.exports = EducationalOrganization;