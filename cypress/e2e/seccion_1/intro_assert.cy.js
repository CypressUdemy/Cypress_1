describe("Introduccion a los Assert ", () => {

    it("Demo de los Asserts", () =>{
        cy.visit("https://demoqa.com")
        cy.get('body').click()
        cy.get('.category-cards > :nth-child(2)').click()
        cy.get(':nth-child(2) > .element-list > .menu-list > #item-0').click()
        cy.wait(1000)
        cy.get('#firstName').should("be.visible").type("katherine")
        cy.get('#lastName').should("be.visible").should("be.enabled")
        cy.get('#lastName').type("silva")
    })

})
