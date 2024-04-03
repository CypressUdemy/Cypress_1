///<refence types='cypress' />
require('cypress-xpath')
import 'cypress-file-upload'
require('@4tw/cypress-drag-drop')

describe('Hooks practicas', () => { 
   let tiempo=1500

beforeEach(() =>{ // se repite en cada uno de los test
  
        cy.visit('https://demo.seleniumeasy.com/basic-checkbox-demo.html') 
        cy.wait(tiempo)
         })

 
    it('TEST UNO Hooks', () =>{ 
        
        cy.get('[type="checkbox"]').check().should('be.checked')
        cy.wait(tiempo)
         })

    it('TEST DOS Hooks', () =>{ 

        cy.get("[type='checkbox']").uncheck({force: true}).should('not.be.checked')
        cy.wait(tiempo)
        })


    
    })