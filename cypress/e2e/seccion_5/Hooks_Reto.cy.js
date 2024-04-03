///<refence types='cypress' />
require('cypress-xpath')
import 'cypress-file-upload'
require('@4tw/cypress-drag-drop')

describe('Hooks practicas', () => { 
   let tiempo=2000

beforeEach(() =>{ // se repite en cada uno de los test
  
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.xpath("//input[contains(@name,'username')]").should("be.visible").click().type("Admin") 
        cy.wait(tiempo)
        cy.xpath("//input[contains(@type,'password')]").should("be.visible").click().type("admin123") 
        cy.wait(tiempo)
        cy.get('.oxd-button').click({force: true})
        cy.wait(tiempo)
         })

after(() =>{
        cy.log("ULTIMO CICLO FINAL DE TODO")
        cy.get('.oxd-userdropdown-tab > .oxd-icon').should("be.visible").click({force: true})
        cy.wait(tiempo)
        cy.get(':nth-child(4) > .oxd-userdropdown-link').should("be.visible").click({force: true}) //button logout
        cy.wait(tiempo)
      
        }) 
    it('TEST ADMINIS', () =>{ 
        
        cy.xpath("//a[contains(.,'Admin')]").should("be.visible").click({force: true})
        cy.wait(tiempo)
         })

    it('TEST MY INFO', () =>{ 

        cy.xpath("//a[contains(.,'My Info')]").should("be.visible").click({force: true})
        cy.wait(tiempo)
        })


    
    })