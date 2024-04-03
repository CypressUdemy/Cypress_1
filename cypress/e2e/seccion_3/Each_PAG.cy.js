require('cypress-xpath')
 import 'cypress-file-upload'
 require('@4tw/cypress-drag-drop')

 describe("Bucles For y Each", () => {

    it(" EACH UNO", () =>{   // Si el jefe pide el listado de nombres de ropa
        let tiempo=2000
   cy.visit("https://automationptactice.com")
   cy.get(".product.name").each($el,index,$list),()=>{
    
       cy.log($el.text())
       let vestidos=$el.text() 
       cy.log(vestidos)
         }

     
       })       


       it(" EACH DOS", () =>{   // Si el jefe pide el listado de nombres de ropa Y SELECCIONAR UNO
        let tiempo=2000
   cy.visit("http://automationptactice.com/INDEX.PHP")
   cy.get(".product.name").each($el,index,$list), ()=>{
    
       cy.log($el.text())
       let vestidos=$el.text() 
       if(vestidos.includes("Blouse")){
          cy.wrap($el).click()
       }
        
    
   }

     
       })      
    })  



