const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

const inputtypeTextKey = 'text'


// array of questions for user
const questions = [
    {
        key: 'title',
        message: 'Title',
        type: inputtypeTextKey,
    },
    {
        key: 'description',
        message: 'Description',
        type: inputtypeTextKey,
    },
    {
        key: 'installation',
        message: 'Installation',
        type: inputtypeTextKey,
    },
    {
        key: 'usage',
        message: 'Usage',
        type: inputtypeTextKey,
    },
    {
        key: 'contributing',
        message: 'Contributing',
        type: inputtypeTextKey,
    },
    {
        key: 'questions',
        message: 'Questions',
        type: inputtypeTextKey,
    },

]
/*
[
    
    //'Table of Contents',
    //'License',
    //'Tests',
    
]
*/

// function to write README file
function writeToFile(fileName, data) {
    let content = `
## Title
${data.title}

## Description
${data.description}

## Table of Contents
TODO

## Installation
${data.installation}

## Usage
${data.usage}

## License
TODO

## Contributing
${data.contributing}

## Tests
TODO

## Questions
${data.questions}
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
    //console.log(questions)
    let answers = {}

    for (let i = 0; i < questions.length; i++) {
        let questionObj = questions[i]
        // console.log(questionObj)
        let lookup = questionObj.key
        let answer = askQuestion(questionObj)
        console.log(`answer '${answer}'`)
        console.log('-----------------')
        answers[lookup] = answer
    }
    console.log(answers)
    writeToFile('README.md', answers)
}

// function call to initialize program
init();

function askQuestion(questionObj) {
    //console.log(questionObj)
    let question = questionObj.message

    //console.log(question)
    console.log(`askQuestion '${questionObj}', '${question}'`)

    return `${question},answered`
}