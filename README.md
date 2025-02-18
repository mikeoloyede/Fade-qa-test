# Registration Form Test Automation

Automated test framework for the Registration Form application using Playwright with TypeScript.

## Dependencies

Before you begin, ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- A code editor (VS Code recommended)

## Clone the Project

bash

Clone the repository
git clone <https://github.com/mikeoloyede/Fade-qa-test.git>

Navigate to project directory
cd <project-directory>


## Installation

Follow these steps to set up the project:

1. Install project dependencies:

bash
npm install


2. Install Playwright browsers:

bash
npx playwright install


## Running Tests

There are several ways to run the tests:

### Headless Mode (Default)
Runs tests in the background:

bash
npm run test


### Headed Mode
Runs tests with browser visible:

bash
npm run test:headed


### View Test Report
After test execution, view the HTML report:


### View Test Report
After test execution, view the HTML report:

bash
npx playwright show-report


## Test Application URL

The tests run against:
http://fade-qa-test.s3-website-eu-west-1.amazonaws.com/

This README focuses on the essential information needed to get started with the project quickly and run the tests. Let me know if you'd like to add any additional sections!