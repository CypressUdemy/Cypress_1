 ///<refence types="cypress" /> //para que funcione los comandos

 require('cypress-xpath')
 import 'cypress-file-upload'
 require('@4tw/cypress-drag-drop')

describe("Configuración y Usos de SNIPPETS", () => {

    it("Snippets UNO", () =>{
        let tiempo=1000
        cy.visit("https://demoqa.com/")
        cy.wait(tiempo)
        cy.get('.category-cards > :nth-child(2)').click()//campo FORMS
        cy.get(':nth-child(1) > .group-header > .header-wrapper').click()// campo elements
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').click() //campo text box
   
    cy.get('[argumentos]').should('be.visible').type('texto')
    cy.wait(tiempo)

    cy.get('').should('be.visible').type('texto')
    cy.wait(tiempo)
    })




})
