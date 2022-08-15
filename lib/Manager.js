const Employee = require('./Employee');

//extends the employee class to add engineer specific properties

class Manager extends Employee {
    constructor(name, id, email, phoneNum){
        super(name, id, email);
        this.phoneNum = phoneNum;
    }
}

module.exports = Manager