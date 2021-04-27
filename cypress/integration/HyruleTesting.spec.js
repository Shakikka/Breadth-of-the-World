describe('Breadth of the World homepage functionality', () => {

    beforeEach(() => {
        cy.fixture('get-items-data.json').then((itemInfo => {
            cy.intercept('https://botw-compendium.herokuapp.com/api/v2', itemInfo)
        }))
        cy.visit('http://localhost:3000')
    })

    it
})