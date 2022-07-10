// used to declare dependancies and variables 
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateReadme = require("./utils/generateReadme")
const writeFileAsync = util.promisify(fs.writeFile);

// prompting the user questions and to populate the readMe file 
function promptUser(){
    return inquirer.prompt([
        {
            type: "input",
            name: "projectTitle",
            message: "What is your project's title?",
        },

        {
            type: "input",
            name: "description",
            message: "Write a description of your project:"
        },

        {
            type: "input",
            name: "installation",
            message: "Describe your installation process if you have one:"
        },

        {
            type: "input",
            name: "usage",
            message: "What is the project used for?",

        },

        {
            type: "list",
            name: "license",
            message: "Choose the license used for this project",
            choices: [
                "Academic",
                "Apache",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open",
            ]
        },

        {
            type: "input",
            name: "contributing",
            message: "Who is the contributor(s) of this project?",
        },
        {
            type: "input",
            name: "tests",
            message: "Is there a test needed?"
        },
        {
            type: "input",
            name: "username",
            message: "Enter your Github username:"
        },
        {
            type: "input",
            name: "email",
            message: "Enter your email:"
        }
    ]);
}

// Async function with util.promisify 
async function init() {
    try {
        //  questions and generate responses
        const answers = await promptUser();
        const generateContent = generateReadme(answers);
        // Write new README.md to directory
        await writeFileAsync('README.md', generateContent);
        console.log('✔️  Successfully wrote to README.md');
    }   catch(err) {
        console.log(err);
    }
  }
  
  init();