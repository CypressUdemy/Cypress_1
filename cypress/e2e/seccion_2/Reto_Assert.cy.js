///<refence types="cypress" /> //para que funcione los comandos

require('cypress-xpath')

describe("Reto Asserts ", () => {

    it(" Reto de lso Asserts ", () =>{
        let tiempo=1300

        cy.visit("http://demo.seleniumeasy.com/basic-first-form-demo.html")
        
        let a=35
        let b=20

        cy.get('#value1').should("be.visible").and("have.class","form-control").type(a)
        cy.get('#value2').should("be.visible").and("have.class","form-control").type(b)
        cy.contains("[type='button']","Get Total").click()
        cy.wait(tiempo)

        cy.get('#displayvalue').should("be.visible").then((e)=>{ //e puede llamarse como queramos
            cy.log(e.text())
            // con lo siguiente verificamos que la pagina este sumando bien, porque es nuestra sumatoria vs pagina
            let r=a+b
            cy.log("el valor de r: "+ r)
            let respuesta=e.text()
            
             if(r==respuesta){
                 cy.log("LOS RESULTADOS SON IGUALES")
             }else{
                cy.log("LOS RESULTADOS NO SON IGUALES")
             }


            if(respuesta > 50) { //si el resultado en mayor a 50 has tal cosa
            a=a-10
            b=b-10
        cy.get('#value1').should("be.visible").and("have.class","form-control").clear().type(a)
        cy.wait(tiempo)
        cy.get('#value2').should("be.visible").and("have.class","form-control").clear().type(b)
        cy.wait(tiempo)
        cy.contains("[type='button']","Get Total").click()
          }else{
            a=a+5
            b=b+5
        cy.get('#value1').should("be.visible").and("have.class","form-control").clear().type(a)
        cy.wait(tiempo)
        cy.get('#value2').should("be.visible").and("have.class","form-control").clear().type(b)
        cy.wait(tiempo)
        cy.contains("[type='button']","Get Total").click()
          }
        })
        })
 
    })   
 