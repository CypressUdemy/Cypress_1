 ///<refence types="cypress" /> //para que funcione los comandos

 require('cypress-xpath')

 describe("CARGA POR FIXTURES con alias", () => {
     Cypress.on('uncaught:exception', (err, runnable) =>{  //este codigo es cuando presenta error sin sentidos
      return false
   })

    
it("TEST UNO CARGANDO DESDE JSON CON ALIAS", () =>{
            
        cy.fixture("datos").then(tesdata =>{ //tesdata es un arreglo elnombre es a criterio
            tesdata.forEach(data => {  //data es una variable del arreglo
              const d_nombre=data.nombre 
              const d_email=data.email
              const d_dir1=data.dir1
              const d_dir2=data.dir2

        cy.visit("https://demoqa.com/")
        cy.get('.category-cards > :nth-child(2)').click()//campo FORMS
        cy.get(':nth-child(1) > .group-header > .header-wrapper').click()// campo elements
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').click()//campo tex box
           
        cy.get("#userName").should("be.visible").type(d_nombre)
        cy.wait(500)
        cy.get("#userEmail").should("be.visible").type(d_email)
        cy.wait(500)
        cy.get("#currentAddress").should("be.visible").type(d_dir1)
        cy.wait(500)
        cy.get("#permanentAddress").should("be.visible").type(d_dir2)
        cy.wait(500)
        cy.get('#submit').should('be.visible').click({force:true})
      
          })
        })         
    })
})
       



