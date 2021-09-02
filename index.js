const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

const inputtypeText = 'input'
const inputtypeList = 'list'
const inputtypeEditor = 'editor'


// array of questions for user
const questions = [
    {
        name: 'title',
        message: 'Title',
        type: inputtypeText,
    },
    {
        name: 'description',
        message: 'Description',
        type: inputtypeEditor,
    },
    {
        name: 'installation',
        message: 'Installation',
        type: inputtypeEditor,
    },
    {
        name: 'usage',
        message: 'Usage',
        type: inputtypeEditor,
    },
    {
        name: 'license',
        message: 'License',
        type: inputtypeList,
        choices: [
            "Apache",
            "GNU",
            "ISC",
            "MIT",
            "Mozilla",
            "BSD",
        ]
    },
    {
        name: 'contributing',
        message: 'Contributing',
        type: inputtypeEditor,
    },
    {
        name: 'tests',
        message: 'Tests',
        type: inputtypeEditor,
    },
    {
        name: 'github_id',
        message: 'Github ID',
        type: inputtypeText,
    },
    {
        name: 'email_address',
        message: 'Email address',
        type: inputtypeText,
    },

]

// function to write README file
function writeToFile(fileName, content) {
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
    inquirer.prompt(questions).then((answers) => {
        console.log(JSON.stringify(answers, null, '  '))
        let content = generateMarkdown(answers)
        writeToFile('generated_readme/README.md', content)
    })
}

// function call to initialize program
init()