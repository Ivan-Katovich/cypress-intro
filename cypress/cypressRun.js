const cypress = require('cypress')
cypress.run({
    reporter: 'spec',
    spec: './cypress/integration/my.spec.js',
    config: {
        baseUrl: 'https://www.cypress.io',
        chromeWebSecurity: true,
        pageLoadTimeout: 60000,
        video: false
    },
    headed: true,
    video: true
})