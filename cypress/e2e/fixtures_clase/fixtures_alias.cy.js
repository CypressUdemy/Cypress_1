 ///<refence types="cypress" /> //para que funcione los comandos

 require('cypress-xpath')

 describe("CARGA POR FIXTURES con alias", () => {
     Cypress.on('uncaught:exception', (err, runnable) =>{  //este codigo es cuando presenta error sin sentidos
      return false
   })

 before(function(){
       cy.fixture('datos').as("datos_json") //"as" es el alias,se coloca el nombre q se quiera
 
    })
    
it("TEST UNO CARGANDO DESDE JSON CON ALIAS", () =>{
        cy.visit("https://demoqa.com/")
        cy.get('.category-cards > :nth-child(2)').click()//campo FORMS
        cy.get(':nth-child(1) > .group-header > .header-wrapper').click()// campo elements
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').click()//campo tex box
        
        cy.get("@datos_json").then((data)=>{
            cy.get("#userName").should("be.visible").type(data.nombre)
            cy.wait(2000)
            cy.get("#userEmail").should("be.visible").type(data.email)
            cy.wait(2000)
            cy.get("#currentAddress").should("be.visible").type(data.dir1)
            cy.wait(2000)
            cy.get("#permanentAddress").should("be.visible").type(data.dir2)
            cy.wait(2000)
            cy.get('#submit').should('be.visible').click({force:true})
            
        })
     })
   })    



