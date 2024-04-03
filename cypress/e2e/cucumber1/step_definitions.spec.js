import {
    Given,
    When,
    Then
    
  } from "@badeball/cypress-cucumber-preprocessor"
  
  Cypress.on('uncaught:exception', (err, runnable) =>{return false});

  Given("abrir el navegador principal", () => {
      
    cy.visit("https://demoqa.com/")
    cy.get('.category-cards > :nth-child(2)').click()//campo FORMS
    cy.get(':nth-child(1) > .group-header > .header-wrapper').click()// campo elements
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').click()// campo tex box
    cy.wait(500)  
  }); 
  
  When("cargando el nombre {word}", (Name) => {
    cy.get('#userName').should('be.visible').type(Name)
    cy.wait(500)    
  });
  
  When("cargando el email {word}", (Email) => {
    cy.get('#userEmail').should('be.visible').type(Email)
    cy.wait(500)
  });

 
  When("cargando la direccion {word}", (dir1)=> {
    cy.get('#currentAddress').should('be.visible').type(dir1)
    cy.wait(500)

  });  

  When("cargando la direccion2 {word}", (dir2)=> { //word acepta solo una palabra (calvatio) sino el_clavario
    cy.get('#permanentAddress').should('be.visible').type(dir2)
    cy.wait(500)  
  });

  Then("click en boton", ()=> {
    cy.get('#submit').should('be.visible').click({force:true})
    cy.wait(500)

  });  