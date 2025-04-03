module.exports = {
    spec: ['test/**/*.test.js'],
    timeout: '30000',
    retries: 3,
    reporter: 'mocha-allure-reporter',
    reporterOptions: {
        allureResultsPath: 'allure-results'
    }
};

