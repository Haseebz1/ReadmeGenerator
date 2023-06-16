
const fs = require("fs");
const inquirer = require("inquirer");
const generate = require("./Utils/generateMarkdown");


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
      default: " npm test"
  
    },
    {
      type: "input",
      name: "installation",
      message: "write command for install dependencies?",
      default: "npm i"
  
    },
    {
      type: "input",
      name: "usage",
      message: "What does the user need to know about using repo?",
  
    },
    {
        type: "input",
        name: "contrubuting",
        message: "What does the user need to know about contributing to the repo?",
    
      },
  ];


function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        console.error("Error writing file:", err);
      } else {
        console.log("Responses written to responses.txt");
      }
    });
  }



function init() {
    inquirer.prompt(questions).then((answers) => {
      console.log(answers);
      const data = JSON.stringify(answers, null, 2);
      writeToFile("readMe.md", generate(answers));
    });
  }
  
init()

