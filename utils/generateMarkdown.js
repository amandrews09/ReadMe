// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "None"){
    return ""
  }
  else if (license == "MIT"){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Use](#use)
- [Credits](#credits)
- [License](#license)

## Description
${data.description}
## Installation
${data.installation}
## Use
${data.use}
## Credits
${data.credits}
## Contribute
${data.contribute}
## Tests
${data.tests}
`;
}

module.exports = generateMarkdown;
