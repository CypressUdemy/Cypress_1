describe("bienvenido al curso", () => {

   it("mi primer test -> Hola mundo", () =>{
      cy.log("hola mundo")
    })

    it("mi segundo test - Validar página de inicio", () =>{
       cy.visit("https://demoqa.com/")
       cy.wait(2000)
       cy.get('.category-cards > :nth-child(1)').click()
       cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').click()
       cy.get('#userName').type("katherine")
       cy.wait(2000)
       cy.get('#userEmail').type("katherine.silva23@gmail.com")
    })   

   
})