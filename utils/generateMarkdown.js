// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function getLicenseBadge(license) {
  // Define a mapping of licenses to their corresponding badge URLs
  // code copied from chatAI
  const licenseBadges = {
    MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    
  };

  // Check if the license exists in the mapping, if not, return an empty string
  if (license in licenseBadges) {
    return licenseBadges[license];
  } else {
    return '';
  }
}

// Example usage:
// const license = 'MIT';
// const badge = getLicenseBadge(license);
// console.log(badge); // This will print the MIT license badge URL

function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// code copied from chatAI
function getLicenseLink(license) {
  // Define a mapping of licenses to their corresponding links
  const licenseLinks = {
    MIT: 'https://opensource.org/licenses/MIT',
    
  };

  // Check if the license exists in the mapping, if not, return an empty string
  if (license in licenseLinks) {
    return licenseLinks[license];
  } else {
    return '';
  }
}

// Example usage:
const license = 'MIT';
const link = getLicenseLink(license);
console.log(link); // This will print the MIT license link

function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// code copied from chatAI
function extractLicenseSection(readmeText) {
  // Split the README text into lines
  const lines = readmeText.split('\n');

  // Initialize variables to keep track of the license section
  let licenseSection = '';
  let isInLicenseSection = false;

  // Iterate through each line of the README
  for (const line of lines) {
    // Check if the line contains information about the license (you can adjust this condition)
    if (line.toLowerCase().includes('license')) {
      // Start recording the license section
      isInLicenseSection = true;
    }

    // If we are in the license section, append the line to the licenseSection variable
    if (isInLicenseSection) {
      licenseSection += line + '\n';
    }
  }

  // Remove extra whitespace from the beginning and end of the license section
  licenseSection = licenseSection.trim();

  // If no license section was found, return an empty string
  if (licenseSection === '') {
    return '';
  }

  return licenseSection;
}

// Example usage:
const readmeText = `
# My Project

This is a README for my project.

## Table of Contents

- [License](#license)

## License

This project is licensed under the MIT License.

Some additional text.

`;

const licenseSection = extractLicenseSection(readmeText);
console.log(licenseSection);

function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// code copied from chatAI
function generateREADME({
  title,
  description,
  installation,
  usage,
  license,
  
}) {
  // Create the Markdown content for the README
  const markdown = `
# ${title}

${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Installation

${installation}

## Usage

${usage}

## License

This project is licensed under the ${license} License.

  `;

  return markdown;
}

// Example usage:
const readmeData = {
  title: 'My Awesome Project',
  description: 'This is a sample project description.',
  installation: 'You can install this project by running `npm install my-project`.',
  usage: 'To use this project, follow these steps...',
  license: 'MIT',
};

const generatedREADME = generateREADME(readmeData);
console.log(generatedREADME);

function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
