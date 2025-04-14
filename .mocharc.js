module.exports = {
    spec: ['test/**/*.test.js'],
    timeout: '30000',
    retries: 3,
    reporter: 'mochawesome',
    reporterOptions: {
        reportDir: 'mochawesome-report',
        overwrite: true,
        html: true,
        json: false,
    }
}

