
 describe("PRIMER RETO", () => {

    it("PRIMER RETO DEL CURSO", () =>{
        cy.visit("https://demoqa.com/")
        cy.wait(1000)
        cy.get('.category-cards > :nth-child(2)').click()//campo FORMS
        cy.get(':nth-child(1) > .group-header > .header-wrapper').click()// campo elements
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-3').click()// campo web tables
        cy.get('#searchBox').should("be.visible").should("be.enabled")
        //cy.get('#searchBox').type("Cierra") //escribe en el buscador             
        //cy.get('#searchBox').should("be.visible").clear()
        cy.get('#addNewRecordButton').should("be.visible").click()
        cy.get('#firstName').should("be.visible").type("kat")
        cy.get('#lastName').should("be.visible").type("perez")
        cy.get('#userEmail').should("be.visible").type("cami11@gmail.com")
        cy.get('#age').should("be.visible").type("32")
        cy.get('#salary').should("be.visible").type("1000")
        cy.get('#department').should("be.visible").type("informatica")
        cy.get('#submit').should("be.visible").click()
        //editar un campo
        cy.get('#edit-record-4').should("be.visible").click()
        cy.wait(1000)
        cy.get("#age").should("be.visible").clear().type("50")
        cy.get('#submit').should("be.visible").click()

    })
 

})   

