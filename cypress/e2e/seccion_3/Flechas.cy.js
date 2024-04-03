require('cypress-xpath')
 import 'cypress-file-upload'
 require('@4tw/cypress-drag-drop')

 describe(" FLECHAS", () => {

    it("Flechas UNO", () =>{
        let tiempo=2000
    
    cy.visit("https://demo.seleniumeasy.com/bootstrap-date-picker-demo.html")
    cy.get('#sandbox-container1 > .input-group > .form-control').should("be.visible").type("23/11/2021").then(()=>{ //sino le pusieramos la promesa no seleccionaria la flecha
        cy.wait(tiempo)
        cy.get('#sandbox-container1 > .input-group > .form-control').should("be.visible").type("{esc}")   // el esc permite dar como un click a la fecha y poder elegirla
       
    cy.get('[placeholder="Start date"]').should("be.visible").type("23/11/2021 {esc}")
})
   })
})
// si tuviese el plugin de tab se podria trabajr con el codigo
//cy.get('[placeholder="Start date"]').should("be.visible").type("23/11/2021 {esc}").tab().type("11/06/2021 {esc}")