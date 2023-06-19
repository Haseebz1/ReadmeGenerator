
  function renderLicenseBadge(license) {
    return `![App license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }


function renderLicenseLink(license) {
  if (license !== 'NONE') {
    return `- [License](#license)`;
  }
  return '';
}

function renderLicenseSection(license) {
  if (license !== 'NONE') {
    return `## License
    this project is licensed under the ${license} license.
    `
  }
  return ''
}

function generateMarkdown(data) {
  return `# ${data.title} 

  ${renderLicenseBadge(data.license)}


  ## Description
  ${data.description}



  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation 
  ${data.installation}

  ## Usage
  ${data.usage} 

  ## Test 
  ${data.test}

  ## Github
  ${data.github}

  ## How to contribute
  ${data.contrubuting}

  ## license
  ${data.license}

`

}

module.exports = generateMarkdown;
