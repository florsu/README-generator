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
            'Order a pizza',
            'Make a reservation',
            new inquirer.Separator(),
            'Ask for opening hours',
            {
                name: 'Contact support',
                disabled: 'Unavailable at this time',
            },
            'Talk to the receptionist',
        ],
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
function writeToFile(fileName, data) {
    let content = `<h1 align="center">${data.title}</h1>

<a name="description"></a>
## Description
${data.description}

<a name="toc"></a>
## Table of Contents
- [Description](#description)
- [Table of Contents](#toc)
- [Installation](#installation)  
- [Usage](#usage)
- [License](#license)  
- [Contributing](#contributing)  
- [Tests](#tests)
- [Questions](#questions)  

<a name="installation"></a>
## Installation
${data.installation}

<a name="usage"></a>
## Usage
${data.usage}

<a name="license"></a>
## License
${data.license}

<a name="contributing"></a>
## Contributing
${data.contributing}

<a name="tests"></a>
## Tests
${data.tests}

<a name="questions"></a>
## Questions
${data.github_id} (https://github.com/${data.github_id})

For additional questions, contact me at ${data.email_address} 
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
    inquirer.prompt(questions).then((answers) => {
        console.log(JSON.stringify(answers, null, '  '))
        writeToFile('README.md', answers)
    })

}

// function call to initialize program
init()