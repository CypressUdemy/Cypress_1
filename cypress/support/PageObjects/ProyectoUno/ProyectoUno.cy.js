class ProyectoUno_PO{

    visitaPagina(){
        let tiempo=1000 
        Cypress.config('pageLoadTimeout', 9000)
        Cypress.config('defaultCommandTimeout', 15000)



Cypress.config('pageLoadTimeout') // => 100000
        beforeEach(() =>{ 
        cy.visit('https://demo.seleniumeasy.com/input-form-demo.html') 
        cy.wait(tiempo)
        })
       
    }

    seccionUno(name,ape,email,t){
        let tiempo=t
        cy.xpath("//input[contains(@name,'first_name')]").should("be.visible").type(name)
        cy.wait(tiempo)
        cy.screenshot("campo nombre")
        cy.xpath("//input[contains(@name,'last_name')]").should("be.visible").type(ape)
        cy.wait(tiempo)
        cy.xpath("//input[contains(@name,'email')]").should("be.visible").type(email)
        cy.wait(tiempo)
    }

    seccionDos(phone,dir,city,estado,t){
        let tiempo=t
        cy.xpath("//input[@name='phone']").should("be.visible").type(phone)
        cy.wait(tiempo)
        cy.xpath("//input[@name='address']").should("be.visible").type(dir)
        cy.wait(tiempo)
        cy.xpath("//input[contains(@name,'city')]").should("be.visible").type(city)
        cy.wait(tiempo)
        cy.get('.selectContainer > .input-group > .form-control').select(estado, {force:true}) // campo de seleccionar ciudad
        cy.wait(tiempo)    
    }

    seccionTres(cod,pag,descri,t){
        let tiempo=t
        cy.get(':nth-child(9) > .inputGroupContainer > .input-group > .form-control').should("be.visible").type(cod) //codigo postal
        cy.wait(tiempo)
        cy.get(':nth-child(10) > .inputGroupContainer > .input-group > .form-control').should("be.visible").type(pag)
        cy.wait(tiempo)
        cy.get(':nth-child(2) > label > input').check().should('be.checked')
        cy.wait(tiempo)
        cy.get(':nth-child(12) > .inputGroupContainer > .input-group > .form-control').should("be.visible").type(descri)
        cy.wait(tiempo)
        cy.get('.btn').should("be.visible").click({force:true})
    }

} // final 

export default ProyectoUno_PO;