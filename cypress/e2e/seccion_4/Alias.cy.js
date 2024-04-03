 ///<refence types="cypress" /> //para que funcione los comandos

 require('cypress-xpath')
 import 'cypress-file-upload'
 require('@4tw/cypress-drag-drop')
 
 describe("Manejo de Alias ", () => {

    it("Alias 1 ", () =>{
        let tiempo=2000
        cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html")
        cy.wait(tiempo)

        cy.get('#firstname').should("be.visible").as("nom") //en ese as guardas el alias "nom" que es nombre
          cy.get("@nom").type("katherine")    
        cy.wait(tiempo)

        cy.get('#surname').should("be.visible").as("ap")//en ese as guardas el alias "ap" que es apellido
          cy.get("@ap").type("Sulbaradodse")         //para usar el alias se usa "@ap"
      
        //cy.get('#age').should("be.visible").type("34") //la manera tradicional
        cy.get('#age').should("be.visible").as("edad")
           cy.get("@edad").type("34")

        cy.get('#country').should("be.visible").as("país")
            cy.get("@país").select("Bulgaria").should("have.value","Bulgaria")

        cy.get('#notes').should("be.visible").as("notas")
            cy.get("@notas").type("todo bien")

         cy.xpath("//input[contains(@type,'submit')]").click({force:true})
      
      })  
 

     })   