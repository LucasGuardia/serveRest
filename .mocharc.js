module.exports = {
    spec: ['test/**/*.test.js'],  // Localização dos testes
    timeout: '30000',             // Timeout de 30 segundos por teste
    retries: 3,                   // Tenta até 3 vezes em caso de falha
    reporter: 'mocha-allure-reporter',  // Configuração do Allure Reporter
    reporterOptions: {
        allureResultsPath: 'allure-results' // Caminho onde os resultados do Allure serão salvos
    }
};

