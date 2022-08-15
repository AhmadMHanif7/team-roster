const Employee = require('./Employee');

//extends the employee class to add intern specific properties

class Intern extends Employee {
    constructor(name, id, email, gitHub, school){
        super(name, id, email);
        this.gitHub = gitHub;
        this.school = school;
    }
}

module.exports = Intern