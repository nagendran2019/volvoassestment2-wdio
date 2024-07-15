//wdio.conf
const { generate } = require('@wdio/cucumberjs-json-reporter').default;

exports.config = {
    // Runner and framework configuration
    runner: 'local',
    framework: 'cucumber',

    // Specify Test Files
    specs: [
        './feature/*.feature'
    ],
    exclude: [],

    // Capabilities
    maxInstances: 1,
    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: ['--headless', '--disable-gpu']
        }
    }],

    // Set log level
    logLevel: 'info',

    // Set base URL
    baseUrl: 'https://www.volvocars.com/intl/v/safety/highlights',

    // Default timeout for all waitFor* commands
    waitforTimeout: 10000,

    // Framework options
    cucumberOpts: {
        require: ['./step-definition/*.js'],
        format: ['json:./reports/json/volvosafety_report.json'],
        dryRun: false,
        failFast: false
    },

    // Services
    services: [
        'chromedriver',
        ['image-comparison', {
            baselineFolder: './base/',
            screenshotPath: './screenshots/',
            savePerInstance: true,
            autoSaveBaseline: true,
            blockOutStatusBar: true,
            blockOutToolBar: true,
            returnAllCompareData: true,
        }]
    ],

    //reporters
    reporters: [
        ['cucumberjs', {
            jsonFolder: './reports/json/',
            language: 'en',
        }],
    ],

    //hooks
    onComplete() {
        generate({
            jsonDir: './reports/json/',
        })
    }
};
