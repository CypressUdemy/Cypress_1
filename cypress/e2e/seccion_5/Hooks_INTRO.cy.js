///<refence types='cypress' />
require('cypress-xpath')
import 'cypress-file-upload'
require('@4tw/cypress-drag-drop')

describe('Hooks', () => { 
   
before(() =>{
   cy.log("principio de todo")
   cy.wait(2000)
})

beforeEach(() =>{
    cy.log("esto se repite en c/u de los test ES MUY IMPORTANTE")
    cy.wait(2000)
})

afterEach(() =>{
    cy.log("esto se hace al final de todos los test")
    cy.wait(2000)
}) 

after(() =>{
    cy.log("ULTIMO CICLO FINAL DE TODO")
    cy.visit("https://demoqa.com/")
    cy.wait(2000)
})  

    
    it('TEST UNO', () =>{ 
        let tiempo=1000 
        cy.log("test 1")
        cy.wait(tiempo)
         })

    it('TEST DOS', () =>{ 
        let tiempo=1000 
        cy.log("test 2")
        cy.wait(tiempo)
        })

    })