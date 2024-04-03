 ///<refence types="cypress" /> //para que funcione los comandos

 require('cypress-xpath')
 import 'cypress-file-upload'
 require('@4tw/cypress-drag-drop')
 
 describe("Alerts Ventanas Emergentes ", () => {

    it("Alerts ", () =>{
        let tiempo=2000
        cy.visit("https://demo.seleniumeasy.com/bootstrap-modal-demo.html")
        cy.wait(tiempo)
        cy.get(':nth-child(2) > .col-md-4 > .panel > .panel-body > [data-toggle="modal"]').click()
        cy.wait(tiempo)
        cy.get('#myModal0 > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click({force:true})
      
        })
 

     })   