describe('Breadth of the World homepage button functionality', () => {

    beforeEach(() => {
        cy.fixture('get-items-data.json').then((itemInfo => {
            cy.intercept('https://botw-compendium.herokuapp.com/api/v2', itemInfo)
        }))
        cy.visit('http://localhost:3000')
    })

    it('should have an equipment button that takes you to the equipment page', () => {
        cy.get('h1')
        cy.contains('Breadth')
        cy.get('.eq-btn').click()
        cy.contains('equipment')
    })

    it('should have a materials button that takes you to the materials page', () => {
        cy.get('.mat-btn').click()
        cy.contains('materials')
    })

    it('should have a monsters button that takes you to the monsters page', () => {
        cy.get('.mon-btn').click()
        cy.contains('monsters')
    })

    it('should have a treasure button that takes you to the treasure page', () => {
        cy.get('.trsr-btn').click()
        cy.contains('treasure')
    })

    it('should have a favorites button that takes you to the favorites page', () => {
        cy.get('.fv-btn').click()
        cy.contains('Favorites')
    })

    it('should have a creatures button that takes you to the creatures page', () => {
        cy.get('.crtr-btn').click()
        cy.contains('creatures')
    })
})

describe('Search with creatures experience', () => {
    beforeEach(() => {
        cy.fixture('get-items-data.json').then((itemInfo => {
            cy.intercept('https://botw-compendium.herokuapp.com/api/v2', itemInfo)
        }))
        cy.visit('http://localhost:3000/creatures')
    })

    it('should have a creature with a name', () => {
        cy.get('p').contains('armored')
    })

    it('should click to show creature details', () => {
        cy.get('p').first().click()
        cy.get('p').contains('Cooking Effects: defense up')
    })

    it('should have a home button that takes you back to the home page', () => {
        cy.get('p').first().click()
        cy.get('p').contains('Cooking Effects: defense up')
        cy.get('.home-btn').click()
        cy.url('eq', 'http://localhost:3000/')
    })

    it('should be able to search by name', () => {
        cy.get('.search').type('chubby').get('.srch-btn').click()
        cy.get('p').should('not.contain', 'carp').should('contain', 'checker')
    })
})

describe('Favorite materials experience', () => {
    beforeEach(() => {
        cy.fixture('get-items-data.json').then((itemInfo => {
            cy.intercept('https://botw-compendium.herokuapp.com/api/v2', itemInfo)
        }))
        cy.visit('http://localhost:3000/materials')
    })

    it('should have a material that can be favorited and unfavorited', () => {
        cy.get('p').click()
        cy.contains('Gerudo Desert, Tabantha Frontier')
        cy.get('.fav-btn').click()
        cy.get('.back-btn').click()
        cy.contains('materials')
        cy.get('.home-btn').click()
        cy.get('.fv-btn').click()
        cy.get('p').contains('spicy pepper')
        cy.get('.unfav-btn').click()
        cy.get('button').should('not.contain', '.unfav-btn')
    })
})