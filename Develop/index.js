// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = ['What is the title of the project', 'Please write a description for the project', 'Please explain the installation instructions', 'Please demonstrate the usage informations', 'What are the contribution guidelines', 'Please implement the test instructions'];
// array structure: [title, description, installation, usage information, contribution guidelines, test]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    try {
        fs.writeFile(fileName, data);
    }
    catch (err) {
        console.error(err);
    }
}

// TODO: Create a function to initialize app
function init() {
    let response = {};

    const askQuestions = function () {
        
    }
}



// Function call to initialize app
init();
