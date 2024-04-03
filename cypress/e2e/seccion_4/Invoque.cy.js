 ///<refence types="cypress" /> //para que funcione los comandos

 require('cypress-xpath')
 import 'cypress-file-upload'
 require('@4tw/cypress-drag-drop')
 
 describe("Manejo de INVOQUE ", () => {

    it("Invoque Text ", () =>{
        let tiempo=2000
        cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html")
        cy.wait(tiempo)

        cy.get('.page-body > :nth-child(5)').invoke("text").as("info") 
           cy.get("@info").should("contain","The information will be submitted to the server if it passes client side validation.")
      cy.wait(tiempo)

         cy.get('[for="firstname"]').invoke("text").as("titulo_nom") 
            cy.get("@titulo_nom").should("contain","First name:").then(()=>{
               cy.get('#firstname').type("katherine")  
         })
      
      })  
 
   it("Invoque Estilos", () =>{ //para cambiar color de letra y tamano
         let tiempo=2000
         cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html")
         cy.wait(tiempo)
         cy.get('[for="firstname"]').invoke("attr","style","color:Blue; font-size:50px") //attr=atributo

     })   

   it("Invoque Ocultar y Mostrar", () =>{ //para ocultar y mostrar un campo
      let tiempo=2000
      cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html")
      cy.wait(tiempo)
      cy.get('[for="firstname"]').invoke("hide") //hide lo oculta
      cy.get('#firstname').invoke("hide")
      cy.wait(tiempo)
      cy.get('[for="firstname"]').invoke("show","3s") // show lo muestra, 3s en 3 segundos
      cy.get('#firstname').invoke("show","3s")
       }) 

   it("RETO Invoque", () =>{ //ocultar el campo apellido y que apareza despues de escribir el nombre
         let tiempo=2000
      cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html")
      cy.wait(tiempo)
      cy.get('[for="surname"]').invoke("hide") //hide lo oculta
      cy.get('#surname').invoke("hide")
      cy.wait(tiempo)
         
      cy.get('[for="firstname"]').should("be.visible").type("katherine").then(()=>{
         cy.wait(tiempo)
         cy.get('[for="surname"]').invoke("show","4s")
         cy.get('#surname').invoke("show","4s")
         cy.wait(tiempo)
         cy.get('#surname').type("silva ibarra")
         
             })
      
          }) 

   it("Invoque SRC ", () =>{  //verificar que aparezca uma imagen por medio del atributo SRC
      let tiempo=2000
      cy.visit("https://demo.seleniumeasy.com/bootstrap-modal-demo.html")
      cy.wait(tiempo)
      cy.xpath("//img[contains(@src,'180.png')]").invoke("attr","src").should("contain","/img/930_180.png") 
   
         })

   // it("Invoque Target Blank ", () =>{  //NO CARGA LA PAGINA DEL EJERCICIO, cuando al hacer click se abre en una nueva pestana otra pagina
   //    let tiempo=2000
   //    cy.visit("https://dvwa.co.uk/")
   //    cy.wait(tiempo)
   //    cy.get("kkjijdjdijx").invoke("removeAttr","target").click({force:true}) 
         
   //       })

   })