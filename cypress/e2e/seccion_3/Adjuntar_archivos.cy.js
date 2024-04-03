///<refence types="cypress" /> //para que funcione los comandos
require('cypress-xpath')
import 'cypress-file-upload'

describe("ADJUNTAR ARCHIVO IMAGEN", () => {

    it("PRIMER RETO DEL CURSO", () =>{
        cy.visit("https://demoqa.com/")
        cy.wait(1000)
        cy.get('.category-cards > :nth-child(2)').click()//campo FORMS general
        cy.get(':nth-child(2) > .element-list > .menu-list > #item-0').click() // campo practice forms

        const ruta="IMG1.jpg" 
        cy.get('#uploadPicture').attachFile(ruta)
    })
})