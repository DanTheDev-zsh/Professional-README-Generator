// TODO: Include packages needed for this application
// import generateMarkdown from "./generateMarkdown.js"
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require(`./utils/generateMarkdown.js`)
const fileName = "../README.md";
// TODO: Create an array of questions for user input
const questions = ['What is the title of the project', 'Please write a description for the project', 'Please explain the installation instructions', 'Please demonstrate the usage informations', 'What are the contribution guidelines', 'Please implement the test instructions', 'What is your Github username? (for connections and contacting purposes)', 'What is your Email address?'];
// array structure: [title, description, installation, usage information, contribution guidelines, tests, username, email]

// TODO: Create a function to write README file
// note, writeFile overwrite by default
function writeToFile(fileName, data) {
    console.log({fileName, data});
    try {
        fs.writeFile(fileName, data, (err) => {
            if(err) throw err;
            console.log("README file successfully written");
        });
    }
    catch (err) {
        console.error(err);
    }
}


// TODO: Create a function to initialize app
function init() {
    let responses = {};

    inquirer
        .prompt([
            {
                type: 'input',
                message: questions[0],
                name: 'res_title',
            },
            {
                type: 'input',
                message: questions[1],
                name: 'res_description',
            },
            {
                type: 'input',
                message: questions[2],
                name: 'res_installation',
            },
            {
                type: 'input',
                message: questions[3],
                name: 'res_usage',
            },
            {
                type: 'input',
                message: questions[4],
                name: 'res_contribution',
            },
            {
                type: 'input',
                message: questions[5],
                name: 'res_tests',
            },
            {
                type: 'list',
                message: 'Please choose a license from the list below.',
                choices: [
                    'MIT',
                    'GNU GPLv2',
                    'GNU GPLv3',
                    'Apache',
                    'BSD 3-clause'
                ],
                name: 'res_license'
            },
            {
                type: 'input',
                message: questions[6],
                name: 'res_username',
            },
            {
                type: 'input',
                message: questions[7],
                name: 'res_email',
            }
        ])
        .then((response) => {
            responses['res_title'] = response.res_title;
            responses['res_description'] = response.res_description;
            responses['res_installation'] = response.res_installation;
            responses['res_usage'] = response.res_usage;
            responses['res_contribution'] = response.res_contribution;
            responses['res_tests'] = response.res_tests;
            responses['res_license'] = response.res_license;
            responses['res_username'] = response.res_username;
            responses['res_email'] = response.res_email;

            writeToFile(fileName, generateMarkdown(responses));
        })
        .catch((error) => {
            if (error.isTtyError) {
                console.error('Error: Prompt cannot be rendered in the current environment');
            } else {
                console.error('Error: Something went wrong, not because of rendering at the current environment');
            }
        });
}


// Function call to initialize app
init();
