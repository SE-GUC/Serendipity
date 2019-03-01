//The Partner Model
class Partner{
    constructor(email, username, name, password, description, partners, boardOfMembers, fieldOfWork,
        vacancies,pastProjects) {
        this.email=email;
        this.username=username;
        this.name=name;
        this.password=password;
        this.description=description;
        this.partners=partners;
        this.boardOfMembers=boardOfMembers;
        this.fieldOfWork=fieldOfWork;
        this.vacancies=vacancies;
        this.pastProjects=pastProjects;
    };

}

module.exports = Partner;