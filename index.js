// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        message:"What is the title?",
        name: "title",
    },
    {
        type:"input",
        message:"What is the description?",
        name: "description",
    },
    {
        type:"input",
        message: "Installation instructions?",
        name: "installation",
    },
    {
        type:"list",
        message: "What is the license you want to use?",
        name: "license",
        choices: ["MIT","None"]
    },
    {
        type:"input",
        message: "How does one use the project?",
        name: "use",
    },
    {
        type:"input",
        message: "What credits would you like to include?",
        name: "credits",
    },
    {
        type:"input",
        message: "How to contribute to the project?",
        name: "contribute",
    },
    {
        type:"input",
        message: "Any tests you would like to include? Code examples?",
        name: "tests",
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const markdown = generateMarkdown(data)
    console.log (markdown)
    fs.writeFile(fileName, markdown, function(err){
        if(err) throw err
        console.log ("file written")
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(data){
        console.log (data)
        writeToFile("README2.md",data)
    })
}

// Function call to initialize app
init();
