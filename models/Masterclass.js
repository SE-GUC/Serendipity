const uuid = require('uuid')

// The masterclass Model
class Masterclass {
    constructor( title, Eduorganizationid, duration, price, description, location,courseIDs,workshopsIDs) {
        this.id = uuid.v4();

        this.title = title;

        this.Eduorganizationid = Eduorganizationid;

        this.duration = duration;

        this.price = price;

        this.description = description;

        this.location = location;
        this.courseIDs=courseIDs;
        this.workshopsIDs=workshopsIDs

    };
};

module.exports = Masterclass