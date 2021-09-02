// function to generate markdown for README
function generateMarkdown(data) {
  return `<h1 align="center">${data.title}</h1>

  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)<br />

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
${data.contributing} (https://github.com/${data.github_id})

<a name="tests"></a>
## Tests
${data.tests}

<a name="questions"></a>
## Questions
${data.github_id} (https://github.com/${data.github_id})

For additional questions, contact me at ${data.email_address} 
`
}

module.exports = generateMarkdown;

