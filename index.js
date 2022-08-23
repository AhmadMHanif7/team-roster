const inquirer = require('inquirer');
const fs = require('fs');
const pageTemplate = require('./src/page-template');

const managerClass = require('./lib/Manager');
const managerCard = require('./src/manager-template');

const engineerClass = require('./lib/Engineer');
const engineerCard = require('./src/engineer-template');

const internClass = require('./lib/Intern');
const internCard = require('./src/intern-template');


let cards = [];




//Questions Start
const promptManager = () => {
    return inquirer.prompt([
        {
            type : 'input',
            name: 'name',
            message: "Who is the Team's Manager:",
            validate: validInput => {
                if (validInput){
                    return true;
                } else {
                    console.log('Please enter a valid input');
                    return false;
                }
            }
        },
        {
            type : 'input',
            name: 'id',
            message: "Team Manager's Employee ID:",
            validate: validInput => {
                if (validInput){
                    return true;
                } else {
                    console.log('Please enter a valid input');
                    return false;
                }
            }
        },
        {
            type : 'input',
            name: 'email',
            message: "Team Manager's Employee Email:",
            validate: validInput => {
                if (validInput){
                    return true;
                } else {
                    console.log('Please enter a valid input');
                    return false;
                }
            }
        },
        {
            type : 'input',
            name: 'phone',
            message: "Team Manager's Phone Number:",
            validate: validInput => {
                if (validInput){
                    return true;
                } else {
                    console.log('Please enter a valid input');
                    return false;
                }
            }
        }
    ])
    .then(function({name,id,email,phone}){
        let manager = new managerClass (name,id,email,phone);
        const newManagerCard = managerCard(manager.name, manager.id, manager.email, manager.phone);
        console.log(newManagerCard);
        finishedRoster();
        
    })
};

const promptIntern = () => {
    return inquirer.prompt([
        {
            type : 'input',
            name: 'name',
            message: "What is the Intern's Name:",
            validate: validInput => {
                if (validInput){
                    return true;
                } else {
                    console.log('Please enter a valid input');
                    return false;
                }
            }
        },
        {
            type : 'input',
            name: 'id',
            message: "Intern's Employee ID:",
            validate: validInput => {
                if (validInput){
                    return true;
                } else {
                    console.log('Please enter a valid input');
                    return false;
                }
            }
        },
        {
            type : 'input',
            name: 'email',
            message: "Intern's Employee Email:",
            validate: validInput => {
                if (validInput){
                    return true;
                } else {
                    console.log('Please enter a valid input');
                    return false;
                }
            }
        },
        {
            type : 'input',
            name: 'gitHub',
            message: "Intern's GitHub:",
            validate: validInput => {
                if (validInput){
                    return true;
                } else {
                    console.log('Please enter a valid input');
                    return false;
                }
            }
        },
        {
            type : 'input',
            name: 'school',
            message: "Intern's School:",
            validate: validInput => {
                if (validInput){
                    return true;
                } else {
                    console.log('Please enter a valid input');
                    return false;
                }
            }
        }
    ])
    .then(function({name,id,email,gitHub,school}){
        let intern = new internClass (name,id,email,gitHub,school);
        const newInternCard = internCard(intern.name, intern.id, intern.email, intern.gitHub, intern.school);
        console.log(newInternCard);
        finishedRoster();
    })
}


const promptEngineer = () => {
    return inquirer.prompt([
        {
            type : 'input',
            name: 'name',
            message: "What is the Engineer's Name:",
            validate: validInput => {
                if (validInput){
                    return true;
                } else {
                    console.log('Please enter a valid input');
                    return false;
                }
            }
        },
        {
            type : 'input',
            name: 'id',
            message: "Engineer's Employee ID:",
            validate: validInput => {
                if (validInput){
                    return true;
                } else {
                    console.log('Please enter a valid input');
                    return false;
                }
            }
        },
        {
            type : 'input',
            name: 'email',
            message: "Engineer's Employee Email:",
            validate: validInput => {
                if (validInput){
                    return true;
                } else {
                    console.log('Please enter a valid input');
                    return false;
                }
            }
        },
        {
            type : 'input',
            name: 'gitHub',
            message: "Engineer's GitHub:",
            validate: validInput => {
                if (validInput){
                    return true;
                } else {
                    console.log('Please enter a valid input');
                    return false;
                }
            }
        }
    ])
    .then(function({name,id,email,gitHub}){
        let engineer = new engineerClass (name,id,email,gitHub);
        const newEngineerCard = internCard(engineer.name, engineer.id, engineer.email, engineer.gitHub);
        console.log(newEngineerCard);
        finishedRoster();
    })
}
//Questions End



//Selection Loop

const finishedRoster = () => {
    
    return inquirer.prompt(
        {
            type: 'confirm',
            name: 'rosterConfirm',
            message: 'Roster Complete:'
        })
    .then(function({rosterConfirm}){
        if (rosterConfirm){
            console.log("stop")
        } else {
            console.log(rosterConfirm)
            buildRoster();
        }
    })
}

const buildRoster = () => {

    return inquirer.prompt([
        {
            type: 'list',
            name: 'employee',
            message: 'Employee type: ',
            choices: ['Engineer', 'Intern']
        }
    ])
    .then(function({employee}){
        employee==="Engineer"?promptEngineer():promptIntern();
        })
    }



const initializeApp = () => {
    console.log( `
=======================
Team Roster creation
=======================

        `
    )

    fs.writeFile('./dist/index.html', pageTemplate(), (err) => {
    if (err){
        console.log(err)
    }
    })

    promptManager();
};

initializeApp();