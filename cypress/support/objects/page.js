class Page {
    constructor(){
        this.data = {
            body: 'body',
            mainTag: '.tagline',
            featuresLink: '[href="/features"]',
            heroTitle: '#hero',
            heroTitleLine: '#hero>h1'
        }
    }

    getElement(name) {
        return cy.get(this.data[name]);
    }

    clickOnElement(name) {
        this.getElement(name).click();
    }
}

module.exports = Page;