require('cypress-xpath')
 
describe("REFERENCE WINDOWS ", () => {

   it(" WINDOWS PROPIEDAD CHARSET", () =>{
       cy.visit("https://testsheepnz.github.io/random-number.html")
       cy.document().should("have.property","charset").and('eq','utf-8')
       })
  
    })   

    it(" WINDOWS URL", () =>{
        cy.visit("https://testsheepnz.github.io/random-number.html")
        cy.url().should("include","random=number.html") //solo una parte
        cy.url().should("eq","https://testsheepnz.github.io/random-number.html") //todo el URL
        
    })