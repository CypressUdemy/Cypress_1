import('cypress-plugin-tab')
describe("Funciones para Type Tab ", () => {

    it("Type con Tab", () =>{
        cy.visit("https://demoqa.com")
        cy.get('body').click()
        cy.get('.category-cards > :nth-child(2)').click()
        cy.wait(1000)
        cy.get(':nth-child(2) > .element-list > .menu-list > #item-0').click()
        cy.wait(1000)
        cy.get('#firstName').type("katherine").tab().
        type("silva").tab().
        type("katherine.23@gmail.com")

    })
})   
