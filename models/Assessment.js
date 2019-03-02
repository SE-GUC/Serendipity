const uuid = require('uuid')


class Assessment {
    constructor(memberName, expertName, masterClass, educationalOrg, phoneNumber, daysAvailable) {
        this.id = uuid.v4();
        this.memberName = memberName;
        this.expertName = expertName;
        this.masterClass = masterClass;
        this.educationalOrg = educationalOrg;
        this.phoneNumber = phoneNumber;
        this.daysAvailable = daysAvailable;
    };
};

module.exports = Assessment
