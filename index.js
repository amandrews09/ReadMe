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
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){
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
