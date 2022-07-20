// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    switch (license) {
        case 'MIT':
            return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
        case 'GNU GPLv2':
            return `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
        case 'GNU GPLv3':
            return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
        case 'Apache':
            return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
        case 'BSD 3-clause':
            return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
        default:
            return "";
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    switch (license) {
        case 'MIT':
            return `[MIT License](https://opensource.org/licenses/MIT)`
        case 'GNU GPLv2':
            return `[GNU GPL-2.0 License](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
        case 'GNU GPLv3':
            return `[GNU GPL-3.0 License](https://www.gnu.org/licenses/gpl-3.0)`
        case 'Apache':
            return `[Apache-2.0 License](https://opensource.org/licenses/Apache-2.0)`
        case 'BSD 3-clause':
            return `[BSD-3.0 License](https://opensource.org/licenses/BSD-3-Clause)`
        default:
            return "";
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if(license) 
        return `### License`
    else if(!license)
        return ''
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.res_title}  
${renderLicenseBadge(data.res_license)}  
## Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [License](#license)
7. [Questions](#questions)
### Description
${data.res_description ? data.res_description : 'none provided'}

### Installation
${data.res_installation ? data.res_installation : 'none provided'}

### Usage
${data.res_usage ? data.res_usage : 'none provided'}

### Contributing
${data.res_contribution ? data.res_contribution : 'none provided'}

### Tests
${data.res_tests ? data.res_tests : 'none provided'}

${renderLicenseSection(data.res_license)}
This application is covered under the ${data.res_license} License. Find out more at ${renderLicenseLink(data.res_license)}
### Questions
Here is the link to my GitHub profile: [GitHub](https://github.com/${data.res_username})  
You can also email me at ${data.res_email ? data.res_email : 'none provided'}
`;
}

module.exports = generateMarkdown;
