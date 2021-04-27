describe('Breadth of the World homepage functionality', () => {

    beforeEach(() => {
        cy.fixture('get-items-data.json').then((itemInfo => {
            cy.intercept('https://botw-compendium.herokuapp.com/api/v2', {creatures: itemInfo})
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

describe('Creature experience', () => {
    beforeEach(() => {
        cy.fixture('get-items-data.json').then((itemInfo => {
            cy.intercept('https://botw-compendium.herokuapp.com/api/v2', itemInfo[0])
        }))
        cy.visit('http://localhost:3000/creatures')
    })

    it.only('should have a creature with a name', () => {

    })
})