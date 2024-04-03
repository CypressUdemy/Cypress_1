 ///<refence types="cypress" /> //para que funcione los comandos

 describe("Funciones para Type ", () => {

    it("Type ---> ENTER ", () =>{
        cy.visit("https://www.google.com/")
        cy.wait(1500)
        cy.get('#APjFqb').type("cursos cypress {enter}")
        //cy.get("<h3 class="LC20lb MBeuO DKV0Md">Cursos de Cypress en Venezuela</h3>").click()
    
    })
 

})   