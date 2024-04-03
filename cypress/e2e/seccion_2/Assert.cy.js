 ///<refence types="cypress" /> //para que funcione los comandos

 require('cypress-xpath')

 describe("ASSERTS ", () => {

    it("ASSERT CONTAINS ", () =>{
        cy.visit("https://practice.automationtesting.in/shop/")
        cy.get('.cat-item-24').contains("Android").click()
              
       })
    })  

    it("ASSERT HAVE CLASS", () =>{
    cy.visit("https://demoqa.com/")
    cy.get('.category-cards > :nth-child(2)').click()//campo FORMS
    cy.get(':nth-child(1) > .group-header > .header-wrapper').click()// campo elements
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').click()//campo tex box
    cy.get("#userName").should("be.visible").should("have.class","mr-sm-2").then(()=>{ 
        cy.get("#userName").type("ale")
      
         })
       })

  

    it("ASSERT CONTAINS Text y HAVE TEXT", () =>{
      cy.visit("https://demoqa.com/")
      cy.wait(1000)
      cy.get('.category-cards > :nth-child(2)').click()//campo FORMS
      cy.get(':nth-child(1) > .group-header > .header-wrapper').click()// campo elements
      cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').click()//campo tex box
      cy.get('#userName').should("be.visible").type("ale")  
      //cy.xpath("//input[contains(@id,'userEmail')]").type("alperez@gmail.com")  
      cy.get('#submit').should("be.visible").click()
      cy.get("#name").should("have.text","Name:ale")
      cy.get("#name").should("contain.text","ale")
  }) 

  it.only("ASSERT HAVE TEXT mas THEN", () =>{
    cy.visit("https://demoqa.com/")
    cy.get('.category-cards > :nth-child(2)').click()//campo FORMS
    cy.get(':nth-child(1) > .group-header > .header-wrapper').click()// campo elements
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').click()//campo tex box
    cy.get('#userName').should("be.visible").type("ale")  

    
    cy.get("#userName").should("contain.value","ale").then(()=>{
      cy.get('#userEmail').should("be.visible").type("ale@gmail.com") 
      cy.get('#submit').should("be.visible").click()
    })
        
}) 



    it("ASSERT TEXTO", () =>{
        cy.visit("https://practice.automationtesting.in/shop/")
        cy.xpath("//img[contains(@alt,'Android Quick Start Guide')]").click()   
        cy.get('#tab-description').contains("Android 4.4 (KitKat®) is the latest version of the world’s favorite operating system for mobile phones and tablets. This guide introduces the Android 4.4 software available on Nex- us and Google Play edition mobile devices. It doesn’t describe hardware details such as SIM card instructions, battery informa- tion, specs, and so on.").then((d)=> {
             cy.log("texto coincide")
             let descripcion=d.text()
             cy.log(descripcion)
             if(descripcion=="Android 4.4 (KitKat®) is the latest version of the world’s favorite operating system for mobile phones and tablets. This guide introduces the Android 4.4 software available on Nex- us and Google Play edition mobile devices. It doesn’t describe hardware details such as SIM card instructions, battery informa- tion, specs, and so on."){
                  cy.log("descripcion correcta")
             }
          })
    }) 

    it("ASSERT TEXTO y precio", () =>{
        cy.visit("https://practice.automationtesting.in/shop/")
        cy.xpath("//img[contains(@alt,'Android Quick Start Guide')]").click()   
         cy.get('#tab-description').contains("Android 4.4 (KitKat®) is the latest version of the world’s favorite operating system for mobile phones and tablets. This guide introduces the Android 4.4 software available on Nex- us and Google Play edition mobile devices. It doesn’t describe hardware details such as SIM card instructions, battery informa- tion, specs, and so on.").then((d)=> {
                 cy.log("texto coincide")
                 let descripcion=d.text()
                 cy.log(descripcion)
                 if(descripcion=="Android 4.4 (KitKat®) is the latest version of the world’s favorite operating system for mobile phones and tablets. This guide introduces the Android 4.4 software available on Nex- us and Google Play edition mobile devices. It doesn’t describe hardware details such as SIM card instructions, battery informa- tion, specs, and so on."){
                      cy.log("descripcion correcta")
                    }
              })

        cy.get('ins > .woocommerce-Price-amount').then((d)=>{
           cy.log(d.text())
           let precio=d.text()
           precio=precio.slice(1,7)// aqui le quito el signo dolar, ya que no tomo en cuenta la posicion cero sino que comienzo en 1
           cy.log(precio)

           if(precio > 600){
             cy.log("sale del presupuesto")
           }else{
               cy.log("está dentro del presupuesto")
               cy.xpath("//button[contains(@type,'submit')]").click()
           }   
        })
      
  
    
  it("ASSERT FIND, EQ ", () =>{
        cy.visit("https://practice.automationtesting.in/shop/")
        cy.xpath("//img[contains(@alt,'Android Quick Start Guide')]").click()
        
        })         
   })   

 //ESTE ERA EL EJERCICIO PERO NO ME AGARRO ASI//PRIMERO LA CATEGORIA MAS GRANDE, LUEGO LA MAS ESPEFICICA (clase), Y EL EQ QUE ES LA POSICION DE LA IMAGEN
 //cy.get(".attachment-shop_catalog size-shop_catalog wp-post-image").find('.post-169 > .woocommerce-LoopProduct-link > .attachment-shop_catalog').eq(1).click()//