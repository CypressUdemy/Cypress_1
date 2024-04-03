 ///<refence types="cypress" /> //para que funcione los comandos

 describe(" opciones de click", () => {

    it("CLICK SENCILLO", () =>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').click().type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').click().type("admin123")
        cy.get('.oxd-button').should("be.enabled").click()
        cy.wait(1000)
        cy.get(':nth-child(1) > .oxd-main-menu-item').should("be.visible").click()
        cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item').should("be.visible").click()
    })
 
    it("CLICK FORCE:TRUE", () =>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').click().type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').click().type("admin123")
        cy.get('.oxd-button').should("be.enabled").click()
        cy.wait(1000)
        cy.get(':nth-child(1) > .oxd-main-menu-item').should("be.visible").click()
        cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item').should("be.visible").click({force: true})
    })

    it.only("CLICK POR COORDENADAS (X,Y)", () =>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').click().type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').click().type("admin123")
        cy.get('.oxd-button').should("be.enabled").click()
        cy.wait(1000)
        cy.get('.oxd-topbar-header-title').should("be.visible").click(50,5)
        cy.get('.oxd-topbar-header-title').should("be.visible").click(70,5)
    })
})   