const inquirer = require('inquirer');
const fs = require('fs');
const pageTemplate = require('./src/page-template');


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
    .then(function(answer){
        console.log(answer);
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
    .then(function(answer){
        console.log(answer);
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
    .then(answer =>{
        const nameA = answer.name['name'];
        console.log(nameA);
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
    .then(function(answer){
        if (answer = true){
            console.log("stop")
        } else {
            console.log(answer)
        }
    })
}

const buildRoster = () => {
    console.log(`
=======================
Individual Contributors
=======================
    `)

    return inquirer.prompt([
        {
            type: 'list',
            name: 'employee',
            message: 'Employee type: ',
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'confirm',
            name: 'rosterConfirm',
            message: 'Roster Complete:'
        }
    ])
}


const initializeApp = () => {
    console.log( `
=======================
Team Roster creation
=======================




=======================
Manager
=======================

        `
    )
    buildRoster();
};

// initializeApp();

// finishedRoster();

// fs.writeFile('./dist/index.html', pageTemplate(), (err) => {
//     if (err){
//         console.log(err)
//     } else {
//         console.log("File has been successfully written\n");
//     }
// })


promptManager();

module.exports = promptManager;