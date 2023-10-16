// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const generatedREADME = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        message:"what is the title of the project?",
        name:"title"
    },
    {
        type:"input",
        message:"what is the description of the project?",
        name:"description"
    },
    {
        type:"input",
        message:"what are the installation steps for the project?",
        name:"installation"
    },
    {
        type:"input",
        message:"what is the usage of the project?",
        name:"usage",
    },
    {
        type:"list",
        message:"what is the license of the project?",
        name:"license",
        choices:["MIT", "MOZILLA", "IBM"]
    },
     {
        type:"input",
        message:"what is the contribution of the project?",
        name:"contribution"
    },
    {
        type:"input",
        message:"what is the test for the project?",
        name:"test"
    }
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt(questions)
  .then((answers) => {
    // Use user feedback for... whatever!!
   
    fs.writeFile('./utils/README.md', generatedREADME(answers), (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    }); 
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
}

// Function call to initialize app
init();
