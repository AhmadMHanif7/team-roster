const Employee = require('./Employee');

//extends the employee class to add manager specific properties

class Engineer extends Employee {
    constructor(name, id, email, gitHub){
        super(name, id, email);
        this.gitHub = gitHub;
    }
}

module.exports = Engineer