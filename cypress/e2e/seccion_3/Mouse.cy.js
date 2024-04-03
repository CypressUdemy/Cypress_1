 ///<refence types="cypress" /> //para que funcione los comandos

 require('cypress-xpath')
 import 'cypress-file-upload'
 require('@4tw/cypress-drag-drop')

 describe(" Eventos con el Mousse", () => {

    it("arrastrar y soltar un elemento DRAG AND DROP", () =>{
        let tiempo=1000

        cy.visit("https://the-internet.herokuapp.com/drag_and_drop")
         cy.wait(tiempo)
         cy.get('#column-a').drag('#column-b',{force:true}).then((success) => {
            assert.isFalse(success)
         
            let a=success

           if(a==success) {
            cy.log('NO se movio el elemento')
           }else{
            cy.log("SI se movio el elemento")
           }
        
        })

      })


      it("2 arrastrar y soltar un elemento DRAG AND DROP", () =>{
         let tiempo=1500
 
         cy.visit("http://demo.seleniumeasy.com/drag-and-drop-demo.html")
         cy.get('#todrag > :nth-child(2)').drag("#mydropzone",{force:true})
  
         cy.get('#todrag > :nth-child(3)').drag("#mydropzone",{force:true})
   
         cy.get('#todrag > :nth-child(4)').drag("#mydropzone",{force:true})
         
         
     }) 

     it("3 arrastrar y soltar un elemento DRAG AND DROP", () =>{
      let tiempo=1500

      cy.visit("https://www.way2automation.com/")
      cy.get('.dialog-message > .elementor > .elementor-section-wrap > .elementor-section > .elementor-container',{timeout:60000}).should("be.visible")
      cy.wait(tiempo)
      cy.get('.eicon-close').click({force:true}) 
      cy.get('#menu-item-27580 > :nth-child(1) > .menu-text',{timeout:6000}).should("be.visible").click() // campo all course
      cy.get("#menu-item-27582").should("be.visible").click() // campo selenium
      cy.get("#menu-item-27583").should("be.visible").click() //campo cuando abre otra ventana pero me lo agarra con este comando
      //cy.get("#menu-item-27583").should("be.visible").invoke("removeAttr","target").click()
      cy.wait(tiempo)
      cy.get('.dialog-message > .elementor > .elementor-section-wrap > .elementor-section > .elementor-container',{timeout:50000}).should("be.visible")
      cy.wait(tiempo)
      cy.get('.eicon-close').click({force:true}) 
   })

   it.only("4 deslizar elementos SLIDERS ", () =>{ //esta prueba me fallo
      let tiempo=2000

      cy.visit(" https://demo.seleniumeasy.com/drag-drop-range-sliders-demo.html")
      cy.wait(tiempo)
      cy.get('#slider1 > .range > input').invoke("attr","value","80") //attr=atributo, value=valor, 80=posicion a la cual ruedo
      cy.wait(tiempo)
      cy.get('#slider3 > .range > input').invoke("attr","value","90")
  }) 

  
}) 