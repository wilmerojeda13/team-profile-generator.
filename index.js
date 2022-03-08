// Export the requires modules that We'are going to used
//Node modules
const inquirer = require('inquirer');
const fs = require('fs');
//lib modules
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const generateTeam = require("./src/pageTEmplate");

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
}
