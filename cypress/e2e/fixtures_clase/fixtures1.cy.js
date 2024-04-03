 ///<refence types="cypress" /> //para que funcione los comandos

 require('cypress-xpath')

 describe("CARGA POR FIXTURES", () => {
     Cypress.on('uncaught:exception', (err, runnable) =>{  //este codigo es cuando presenta error sin sentidos
      return false
   })

 before(function(){
       cy.fixture('datos').then(function(data){ //aqui se creo la variable data
          globalThis.data=data
       })  
    })
    
it("TEST UNO CARGANDO DESDE JSON", () =>{
        cy.visit("https://demoqa.com/")
        cy.get('.category-cards > :nth-child(2)').click()//campo FORMS
        cy.get(':nth-child(1) > .group-header > .header-wrapper').click()// campo elements
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').click()//campo tex box
        
        cy.get("#userName").should("be.visible").type(data.nombre)
        cy.get("#userEmail").should("be.visible").type(data.email)
        cy.get("#currentAddress").should("be.visible").type(data.dir1)
        cy.get("#permanentAddress").should("be.visible").type(data.dir2)
        cy.get('#submit').should('be.visible').click({force:true})
      
      })
 })