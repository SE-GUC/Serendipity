class Workshop {
    constructor(id, title, eduOrganisation, duration, educator, price, decription, location) {
        this.id = id;
        this.title = title;
        this.eduOrganisation = eduOrganisation;
        this.duration = duration;
        this.educator = educator;
        this.price = price;
        this.decription = decription;
        this.location = location;
    };
}

module.exports = Workshop;