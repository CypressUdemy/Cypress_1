 ///<refence types="cypress" /> //para que funcione los comandos

 require('cypress-xpath')

 describe("SEGUNDO RETO", () => {

    it("SEGUNDO RETO, PROBANDO APLICACIÓN ", () =>{
        cy.visit("http://computer-database.gatling.io/computers")
     //utilizando XPATH PARA BUSCAR SELECTORES
       cy.xpath("//input[contains(@id,'searchbox')]").type("iMac") //selector del buscador
       cy.get('#searchsubmit').should("be.visible").click()
       cy.xpath('//*[@id="add"]').should("be.visible").click()
       cy.get('#name').should("be.visible").type("canaima")
       cy.get("#introduced").should("be.visible").type("2021-02-15")
       cy.xpath("//input[@id='discontinued']").should("be.visible").type("2021-08-15")
       cy.get('#company').should("be.visible").select("17")
       cy.xpath("//input[@type='submit']").should("be.visible").click()
       cy.xpath("//input[contains(@id,'searchbox')]").type("canaima")
       cy.get('#searchsubmit').should("be.visible").click()
    })
 

     })   
 