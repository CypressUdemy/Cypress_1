describe("Funciones para Type PAGUE UP PAGE DOWN ", () => {

    it("Type ---> PAGE UP", () =>{
        cy.visit("https://demoqa.com")
        cy.get('.category-cards > :nth-child(1)').click() //click en elementos
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').click() //click en text box
        cy.get('header > a > img').should('be.visible')//validar titulo
        cy.wait(1500)
    
        cy.get("#userName").type("{pageup}")

    })
 
    it("Type ---> PAGE DOWN", () =>{
        cy.visit("https://demoqa.com")
        cy.get('.category-cards > :nth-child(1)').click() //click en elementos
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').click() //click en text box
        cy.get('header > a > img').should('be.visible')//validar titulo
        cy.wait(1500)
    
        cy.get("#userName").type("{pagedown}")

    })
})   