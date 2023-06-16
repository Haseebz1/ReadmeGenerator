// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generate = require("./Utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [
    {
      type: "input",
      name: "github",
      message: "What is your github username?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your Email?",
    },
    {
      type: "input",
      name: "title",
      message: "What is name of project?",
    },
    {
      type: "input",
      name: "description",
      message: "Write description of project?",
     
    },
    {
      type: "list",
      name: "license",
      message: "What kind of license should your project have?",
      choices: ["NONE", "APACHE 2.0", "MIT", "BSD 3"],
    },
    {
      type: "input",
      name: "test",
      message: "What is command for test?",
  
    },
    {
      type: "input",
      name: "installation",
      message: "write command for install dependencies?",
  
    },
    {
      type: "input",
      name: "usage",
      message: "What does the user need to know about using repo?",
  
    },
  ];


// TODO: Create a function to write README file

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        console.error("Error writing file:", err);
      } else {
        console.log("Responses written to responses.txt");
      }
    });
  }


// TODO: Create a function to initialize app


// Function call to initialize app

