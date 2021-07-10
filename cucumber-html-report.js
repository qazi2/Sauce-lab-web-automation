var reporter = require('cucumber-html-reporter');


var options = {
        theme: 'bootstrap',
        jsonFile: 'consolidated-reports.json',
        output: 'reports/cucumber-htmlreport.html',
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: true,
        screenshotsDirectory: 'cypress/screenshots',
        storeScreenshots: true,        

        metadata: {

            "App Version":"1.0.0",
            "Test Environment": "PROD",
            "Browser": "Chrome  90",
            "Platform": "Mac OS",
            "Parallel": "Scenarios",
            "Executed": "Remote"
        }
        
    };

    reporter.generate(options);
    