const uuid = require('uuid')
class Admin {

    constructor(full_name,username,email,password) {
        this.id = uuid.v4();
        this.full_name = full_name;
        this.username = username;
        this.email=email;
        this.password = password;
       
    };
}

module.exports = Admin