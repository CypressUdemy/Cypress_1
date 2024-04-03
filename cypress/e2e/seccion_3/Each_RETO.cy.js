 require('cypress-xpath')
 import 'cypress-file-upload'
 require('@4tw/cypress-drag-drop')

 describe("Bucles For y Each", () => {

     
it(" EACH RETO", () =>{  //agregar varias compras automaticamente
        let tiempo=2000

    cy.visit("https://practice.automationtesting.in/shop/")
            
    for(let x=1; x<=2; x++){ //aqui le decimos que realice la operacion tres veces
       cy.get(".woocommerce-LoopProduct-link",{timeout:60000}).eq(x).click({force:true})               
       cy.wait(tiempo)         
       cy.xpath("//input[contains(@type,'number')]").click({force:true}).clear().type("2") //boton de agregar cantidad 
              
      //cy.get('.pp_close',{timeout:5000}).should("not.be.visible").click({force:true}) //pantalla emergente
       cy.wait(tiempo)
       cy.get('.single_add_to_cart_button').should("be.visible").click({force:true}) //agregar al carrito
       cy.get('.woocommerce-message').should("be.visible") //msje de verificacion que se agrego al carrito,lo agregue yo
       cy.wait(tiempo)
       cy.xpath("//a[@href='https://practice.automationtesting.in/basket/'][contains(.,'View Basket')]").click({force:true}) //ver compra
             
         }                
        
     }) 

it.only(" EACH RETO DOS", () =>{  //agregar todos los elementos automaticamente
        let tiempo=2000

    cy.visit("https://practice.automationtesting.in/shop/")
    const datos=[]; 
    
    cy.get(".woocommerce-LoopProduct-link").each(($el,index,$list) => {
          datos[index]=$el.text()
          cy.log(datos.length)
    }).then(()=>{ //si se cumple lo anterior entonces
      
        for(let x=0; x<=datos.length; x++){ //aqui le decimos que realice la operacion todas las veces
            cy.get(".woocommerce-LoopProduct-link",{timeout:60000}).eq(x).click({force:true})               
            cy.wait(tiempo)         
            cy.xpath("//input[contains(@type,'number')]").click({force:true}).clear().type("2") //boton de agregar cantidad 
                   
           //cy.get('.pp_close',{timeout:5000}).should("not.be.visible").click({force:true}) //pantalla emergente
            cy.wait(tiempo)
            cy.get('.single_add_to_cart_button').should("be.visible").click({force:true}) //agregar al carrito
            cy.get('.woocommerce-message').should("be.visible") //msje de verificacion que se agrego al carrito,lo agregue yo
            cy.wait(tiempo)
            cy.xpath("//a[@href='https://practice.automationtesting.in/basket/'][contains(.,'View Basket')]").click({force:true}) //ver compra
                  
              }       

           })

        }) 

    })
     
    