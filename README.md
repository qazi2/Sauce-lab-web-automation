# Sauce-lab-web-automation


## Requirements

- Any computer: Mac, Windows, Linux
- Node 12.0.0+ (LTS)
- git
- Docker

## About project

- Cypress is used as Test automation framework 
- Behavior Driven Development (BDD), Cucumber is implemented
- Page object model is used in order to create object repository for storing web elements
- For reports cucumber-html-reporter is used
- Docker for containerised environment
- Cypress parallel is implemented to execute test in parallel
- cucumber-json-merge is used to consolidate test
- Used chai-sorted assertion

### In order to get the code and install dependencies

- ``` git clone http://capmo-gmbh-qmchua@git.codesubmit.io/capmo-gmbh/secret-sauce-mtofgl ```
- ``` cd secret-sauce-mtofgl ```
- ``` npm install ```

### Enter the following commands in terminal in order to execute test on chrome browser locally 

- ``` npm run test:chromeTest ```

### Enter the following command to visulaize test execution report

- ``` npm run TestExecutionreport ``` 

### Enter the following commands in terminal in order to execute test on electron browser locally

- ``` npm run test:electronTest ```

### Enter the following command to visulaize test execution report

- ``` npm run TestExecutionreport ``` 

### Following is the report path

./reports/cucumber-htmlreport.html


### Enter the following commands to run automated test inside docker container

- ``` docker run -it -v $PWD:/e2e -w /e2e --entrypoint=/bin/bash cypress/included:7.5.0 ```
- ``` npm install -g cucumber-json-merge ``` 
- ``` npm run test:chromeTest ```
- ``` npm run TestExecutionreport ``` 

### Electron test

``` npm run test:electronTest ```
``` npm run TestExecutionreport ``` 

### Screenshots

failed test screenshot available at: secret-sauce-mtofgl/cypress/screenshots/
