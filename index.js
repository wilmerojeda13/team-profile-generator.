// Export the requires modules that We'are going to used
//Node modules
const inquirer = require('inquirer');
const fs = require('fs');
//lib modules
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');


// Array for answer and question .
const buildTeam = [];

// Created questions asked for the user.
const questions =  async () => {
    const answers = await inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "What is the name?",
        },
        {
            type: "input",
            name: "id",
            message: "What is the id number?",
        },
        {
            type: "input",
            name: "email",
            message: "What is the email?",
        },
        {
            type: "list",
            name: "role",
            message: "What is the role?",
            choices: ["Engineer", "Intern", "Manager",]
        },

    ])


    //console log the answers for the user
    // if manager selected answer this questions
    if (answers.role === "Manager") {
        const managerAnswers = await inquirer
        .prompt([
            {
                type: "input",
                name: "officeNumber",
                message: "What is the office number"
            
            },
        ])

        const newManager = new Manager(
            answers.name,
            answers.id,
            answers.email,
            managerAnswers.officeNumber
        );
        buildTeam.push(newManager);

        // if engineer selected this answers
    } else if (answers.role === "Engineer") {
        const githubAnswers = await inquirer
        .prompt([
            {
                type: "input",
                name: "github",
                message: "What is the Github username"
            }
        ])
    
        const newEngineer = new Engineer(
            answers.name,
            answers.id,
            answers.email,
            githubAnswers.github
        );
        buildTeam.push(newEngineer);
    
        //if intern is selected answers this questions

    } else if (answers.role === "Intern") {
        const internAnswers = await inquirer 
        .prompt([
            {
                type: "input",
                name: "school",
                message: "What university did you go to?",
            }
        ])

        const newIntern = new Intern(
            answers.name,
            answers.id,
            answers.email,
            internAnswers.school
        );
        buildTeam.push(newIntern);
    }
}; //End of the questions
async function promptQuestions() {
    await questions()

    const addMemeberAnswers = await inquirer
    .prompt([
        {
            name:'addMember',
            type:'list',
            choices: ['Add a member', 'Create team'],
            message: "What would you like to do next"
        }
    ])

    if (addMemeberAnswers.addMember === 'Add a member') {
        return promptQuestions()
    }
    return createTeam();

}
promptQuestions();

// adding the create team function to generate the page
function createTeam() {
    console.log("new member", buildTeam)
    fs.writeFileSync("./output/index.html",
    generateTeam(buildTeam),
    "utf-8"
    );
}

