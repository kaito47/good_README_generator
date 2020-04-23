const inquirer = require('inquirer');
const fs = require("fs").promises;

console.log('Welcome to the good README generator!');

const questions = [
    // function promptUser() {
    //     return inquirer.prompt([
    {
        type: "input",
        name: "username",
        message: "What is your Github username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?",
    },
    {
        type: "input",
        name: "projectURL",
        message: "What is the URL to your project?",

    },
    {
        type: "input",
        name: "projectName",
        message: "What is your project's name?"
    },
    {
        type: "input",
        name: "projectDescription",
        message: "Please write a short description of your project:",
    },
    {
        type: "list",
        name: "license",
        message: "What kind of license should your project have?",
        choices: ['MIT', 'Creative Commons', 'GNU/GPL'],
    },

    {
        type: "input",
        name: "installDependencies",
        message: "What command should be use to install dependencies?",
    },
    {
        type: "input",
        name: "runTests",
        message: "What command should be used to run tests?",
    },
    {
        type: "input",
        name: "use",
        message: "What does the user need to know about using the repo?",

    },
    {
        type: "input",
        name: "contributions",
        message: "What does the user need to know about contributing to the repo?",
    }



];

inquirer.prompt(questions).then(answers => {
    console.log('\nREADME Answers:');
    console.log(JSON.stringify(answers, null, '  '));
});

// function promptUser() {
//     return inquirer.prompt(questions);


// };

// promptUser();
// console.log(answers);
// inquirer.prompt(questions);
    // .then(function (answers) {
    //     console.log(answers);
    // });
    // .catch(function(err) {
    //     console.log(err);
    // });


// function writeToFile(fileName, data) {
//         }

// function init() {

//         }

// init();
