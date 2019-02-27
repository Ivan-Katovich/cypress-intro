const Page = require('../support/objects/page')
const page = new Page();
const rp = require('request-promise');

describe('first suit', function() {

    beforeEach(() => {
        cy.visit('')
    })

    it('first test', function() {
        // const res = await rp({
        //     method: 'GET',
        //     url: 'https://www.cypress.io/features/'
        // });
        // console.log(res);
        rp({
            method: 'GET',
            url: 'https://www.cypress.io/features/'
        })
            .then((res) => console.log(res));
        cy.title()
            .should('include', 'JavaScript End to End Testing Framework | Cypress.io')
        page.getElement('mainTag')
            .should('contain', 'The web has evolved.')
            .and('contain', 'Finally, testing has too.')
        page.clickOnElement('featuresLink')
        cy.url()
            .should('eq', 'https://www.cypress.io/features/')
        page.getElement('body')
            .should('be.visible')
        page.getElement('heroTitle')
            .should('be.visible')
        page.getElement('heroTitleLine')
            .should('be.visible')
            .and('have.text', 'A test runner built for humans.')
        console.log('11111111111');
    })

    xit('second test', function() {
        cy.visit('https://www.travelsupermarket.com/')
        cy.server();
        cy.route({
            method: 'GET',
            url: 'bin/gb/v1/reference-data/cabin-class/ordered-list'
        }).as('getDash')
        cy.get('button[click-tracking*="Flights"]').click()
        cy.wait('@getDash')
        .its('url').should('include', 'cabin-class')
    })
})

xdescribe('second suit', function() {

    beforeEach(() => {
        cy.visit('')
    })

    xit('first test', function() {
        cy.title()
            .should('include', 'JavaScript End to End Testing Framework | Cypress.io')
        cy.get('.tagline')
            .should('contain', 'The web has evolved.')
            .and('contain', 'Finally, testing has too.')
        cy.get('[href="/features"]').click()
        cy.url()
            .should('eq', 'https://www.cypress.io/features/')
        cy.get('body')
            .should('be.visible')
        cy.get('#hero')
            .should('be.visible')
        cy.get('#hero>h1')
            .should('be.visible')
            .and('have.text', 'A test runner built for humans.')
    })

})