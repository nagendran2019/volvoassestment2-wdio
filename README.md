# volvoassestment2-wdio
Second assignment.

# WebdriverIO CucumberJS Image Comparison and Text Validation

This project demonstrates how to use WebdriverIO with CucumberJS to perform visual image comparisons and text validations on a web page. The tests are configured to run on a Chrome browser and generate HTML reports based on the test results.

It takes care of testing over cross browsers as well like firefox and edge in addition to chrome.

## Prerequisites

- [Node.js](https://nodejs.org/en/) (v12 or higher)
- [npm](https://www.npmjs.com/get-npm)
- Webdriverio
- wdio-image-comparison-service
- wdio/cucumber-framework
- cucumber-html-reporter
- sync
- wdio/local-runner.
  
  OR we can also use docker image - volvotest2-wdio.

For Prallel processing refer, K8s files, details are below.

Evidences-

![image](https://github.com/user-attachments/assets/14e7f1d7-461b-4c3b-8c78-b74a29d23c52)
![image](https://github.com/user-attachments/assets/8c7eba37-197a-4adf-86c8-9ba2316b3bc5)
![image](https://github.com/user-attachments/assets/00e80aa6-084b-480c-abb0-8c1c47fa9c56)
![image](https://github.com/user-attachments/assets/55cdd750-c179-4f0a-86e5-220fd697a6b0)

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
* wdio.chrome.conf.js: WebdriverIO configuration file for Chrome.
* wdio.firefox.conf.js: WebdriverIO configuration file for firefox.
* wdio.edge.conf.js: WebdriverIO configuration file for edge.
* package.json: Node.js project configuration file.
* expected_image.png: Baseline image for visual comparison.
* template to be used along with other templates to run test casess in parallel over cross browsers
* job-volvo-safety-wdio-chrome-tests.yaml
* job-volvo-safety-wdio-firefox-tests.yaml
* job-volvo-safety-wdio-edge-tests.yaml

5. To run the tests, use the following command:
```bash
npx wdio wdio.conf.js

6. Open the ./reports/volvosafety_report.json file to view the test results.
