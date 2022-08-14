const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, phoneNum){
        super(name, id, email);
        this.phoneNum = phoneNum;
    }
}

module.exports = Manager