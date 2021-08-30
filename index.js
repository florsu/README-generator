const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    'Title',
    'Description',
    'Table of Contents',
    'Installation',
    'Usage',
    'License',
    'Contributing',
    'Tests',
    'Questions',
];

// function to write README file
function writeToFile(fileName, data) {
    let content = `
## Title
${data.Title}

## Description
${data.Description}

## Table of Contents

## Installation

## Usage

## License

## Contributing

## Tests

## Questions
`


    fs.writeFile(fileName, content, err => {
      if (err) {
        console.error(err)
        return
      }
      //file written successfully
    })  
}

// function to initialize program
function init() {
    let answers = {}

    for (let i = 0; i < questions.length; i++) {
        let question = questions[i]
        let answer = askQuestion(question)
        console.log(`answer '${answer}'`)
        console.log('-----------------')
        answers[question]=answer
    }
    console.log(answers)
    writeToFile('README.md',answers)
}

// function call to initialize program
init();

function askQuestion(question) {
    console.log(`askQuestion '${question}'`)
    return `${question},answered`
}