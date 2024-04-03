///<refence types="cypress" /> //para que funcione los comandos
describe("VALIDAR TITULO", () => {

    it("test para validar título ", () =>{
        cy.visit("https://demoqa.com")
        cy.get('.category-cards > :nth-child(1)').click() //click en elementos
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').click() //click en text box
        cy.get('header > a > img').should('be.visible')
        cy.log("la función LITLE funcionó bien")
     })
 

     }) 