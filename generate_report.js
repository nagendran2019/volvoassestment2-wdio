const reporter = require('cucumber-html-reporter');

const options = {
    theme: 'bootstrap',
    jsonFile: './cucumber_report.json',
    output: './cucumber_report.html',
    reportSuiteAsScenarios: true,
    launchReport: true,
    metadata: {
        'App Version': '1.0.0',
        'Test Environment': 'QA',
        'Browser': 'Chrome 89.0',
        'Platform': 'Windows 10'
    }
};

reporter.generate(options);