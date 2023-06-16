
  function renderLicenseBadge(license) {
    return `https://img.shields.io/badge/license-${license}-blue.svg`
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
  return `# ${data.title}`

}

module.exports = generateMarkdown;
