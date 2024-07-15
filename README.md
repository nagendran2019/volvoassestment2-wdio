# volvoassestment2-wdio
Second assignment.

# WebdriverIO CucumberJS Image Comparison and Text Validation

This project demonstrates how to use WebdriverIO with CucumberJS to perform visual image comparisons and text validations on a web page. The tests are configured to run on a Chrome browser and generate HTML reports based on the test results.

## Prerequisites

- [Node.js](https://nodejs.org/en/) (v12 or higher)
- [npm](https://www.npmjs.com/get-npm)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/nagendran2019/volvoassestment2-wdio

2. cd your-repo-name
3. npm install
4. Project structure-

* features/: Contains Cucumber feature files.
* step-definitions/: Contains the step definition files for Cucumber.
* reports/: Directory for storing the JSON reports.
* wdio.conf.js: WebdriverIO configuration file.
* package.json: Node.js project configuration file.
* expected_image.png: Baseline image for visual comparison.
* 
5. To run the tests, use the following command:
```bash
npx wdio wdio.conf.js

6. Open the ./reports/volvosafety_report.json file to view the test results.
