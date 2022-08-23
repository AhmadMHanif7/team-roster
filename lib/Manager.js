const Employee = require('./Employee');

//extends the employee class to add engineer specific properties

class Manager extends Employee {
    constructor(name, id, email, phone){
        super(name, id, email);
        this.phone = phone;
    }
}

module.exports = Manager