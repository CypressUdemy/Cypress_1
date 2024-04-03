// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('campo_visible',(selector,texto) => { 
let tiempo=1500
cy.get(selector).should('be.visible').type(texto)
cy.wait(tiempo)
 })

Cypress.Commands.add('campo_xpath',(selector,texto) => { 
let tiempo=1500
cy.xpath(selector).should('be.visible').type(texto)
cy.wait(tiempo)
}) 

Cypress.Commands.add('click_simple',(selector) => { 
let tiempo=1500
cy.get(selector).should('be.visible').click()
cy.wait(tiempo)
})

Cypress.Commands.add('click_force',(selector) => { 
let tiempo=1500
cy.get(selector).should('be.visible').click({force:true})
cy.wait(tiempo)
})

Cypress.Commands.add('click_force_xpath',(selector) => { 
let tiempo=1500
cy.xpath(selector).should('be.visible').click({force:true})
cy.wait(tiempo)
})

//FUNCION COMPLETA PARA DEMOQA TEXT BOX
Cypress.Commands.add('bloque_demoqa', (name,email,dir1,dir2,t) => {
    let tiempo=t
    cy.get('#userName').should("be.visible").type(name)
    cy.wait(tiempo)
    cy.get("#userEmail").should("be.visible").type(email)
    cy.wait(tiempo)
    cy.get("#currentAddress").should("be.visible").type(dir1)
    cy.wait(tiempo)
    cy.get('#permanentAddress').should("be.visible").type(dir2)
    cy.wait(tiempo)
    cy.get("#submit").should("be.visible").click({force:true})
 })

 //FUNCION COMPLETA PARA DEMOSELENIUM RETO CUSTON
 Cypress.Commands.add('bloque_retocuston', (name,ape,email,phone,dir,city,estado,cod,pag,descri,t) => {
    let tiempo=t
    cy.xpath("//input[contains(@name,'first_name')]").should("be.visible").type(name)
    cy.wait(tiempo)
    cy.xpath("//input[contains(@name,'last_name')]").should("be.visible").type(ape)
    cy.wait(tiempo)
    cy.xpath("//input[contains(@name,'email')]").should("be.visible").type(email)
    cy.wait(tiempo)
    cy.xpath("//input[@name='phone']").should("be.visible").type(phone)
    cy.wait(tiempo)
    cy.xpath("//input[@name='address']").should("be.visible").type(dir)
    cy.wait(tiempo)
    cy.xpath("//input[contains(@name,'city')]").should("be.visible").type(city)
    cy.wait(tiempo)
    cy.get('.selectContainer > .input-group > .form-control').select(estado, {force:true}) // campo de seleccionar ciudad
    cy.wait(tiempo)
    cy.get(':nth-child(9) > .inputGroupContainer > .input-group > .form-control').should("be.visible").type(cod) //codigo postal
    cy.wait(tiempo)
    cy.get(':nth-child(10) > .inputGroupContainer > .input-group > .form-control').should("be.visible").type(pag)
    cy.wait(tiempo)
    cy.get(':nth-child(2) > label > input').check().should('be.checked')
    cy.wait(tiempo)
    cy.get(':nth-child(12) > .inputGroupContainer > .input-group > .form-control').should("be.visible").type(descri)
    cy.wait(tiempo)
    cy.get('.btn').should("be.visible").click({force:true})
 })

 Cypress.Commands.add('validar_campo', (selector,mens,nombre_campo,t) => {  
    let tiempo=t
    cy.get(selector).should("be.visible").then((val)=>{
      let dato=val.text()
      cy.log(dato)
      let mensaje=mens
      cy.wait(tiempo)
      if(dato==mensaje){
        cy.log("####### EL DATO SUMINISTRADO EN EL "+ nombre_campo +" NO ES VALIDO ###")
      }
  })
})

Cypress.Commands.add('validar_campos2', (selector,mens,nombre_campo,t) => { 
    let tiempo=t 
    cy.get(selector).should("be.visible").should("contain",mens).then(()=>{
    cy.wait(tiempo)
    cy.log("####### EL DATO SUMINISTRADO EN EL "+ nombre_campo +" NO ES VALIDO ###")
      })
 })
