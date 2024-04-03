require('cypress-xpath')
 import 'cypress-file-upload'
 require('@4tw/cypress-drag-drop')
 
 describe("Elementos de una Tabla", () => {

    it("Children ", () =>{ //llegar desde el elemento mayor al de adentro
        let tiempo=1500
        cy.visit("https://demo.seleniumeasy.com/table-records-filter-demo.html")
        cy.get(".btn-group").children(".btn-success").should("contain","Green").click({force:true}) // en children no se agarro el nombre completo,solo lo del medio
        cy.wait(tiempo)
        cy.get(".btn-group").children(".btn-warning").should("contain","Orange").click({force:true})

         })
 
    it("Seleccionar por medio de EQ", () =>{ 
        let tiempo=2000
        cy.visit("https://demo.seleniumeasy.com/table-records-filter-demo.html")
        cy.get("[type='button']").eq(3).should("contain","Red").click({force:true}) 
        cy.wait(tiempo)
        cy.get("[type='button']").eq(4).should("contain","All").click({force:true}) 
    
        })

    
    it("Seleccionar por medio de FILTRO", () =>{ 
            let tiempo=2000
            cy.visit("https://demo.seleniumeasy.com/table-records-filter-demo.html")
            cy.get("[type='button']").filter(".btn-danger").click({force:true})
            cy.wait(tiempo)
            cy.get("[type='button']").filter(".btn-warning").should("contain","Orange").click({force:true})
            
        
            })

     it("Seleccionar por medio de FIND", () =>{ //buscame FIND
            let tiempo=2000
            cy.visit("https://demo.seleniumeasy.com/table-records-filter-demo.html")
            cy.get(".btn-group").find(".btn-danger").should("contain","Red").click({force:true})
            cy.wait(tiempo)
            cy.get("[type='button']").contains("Orange").click({force:true})              
         })


    it("Seleccionar por medio de FIrst y Last", () =>{ //elige el 1er elemento
            let tiempo=2000
            cy.visit("https://demo.seleniumeasy.com/table-records-filter-demo.html")
            cy.get(".btn-group").find("button").first().click({force:true})
            cy.wait(tiempo)
            cy.get(".btn-group").find("button").last().click({force:true})
         })  
         
    it("Seleccionar los elementos siguientes NEXT ALL", () =>{ // seleccionar todos los elementos a partir de uno
            let tiempo=2000
            cy.visit("https://demo.seleniumeasy.com/table-records-filter-demo.html")
            cy.get("[type='button']").should("contain","Green")
            cy.wait(tiempo)
            cy.get("[type='button']").should("contain","Green").nextAll().should("have.length",4)
         })  
         
    it("Seleccionar elemento Padre", () =>{ // seleccionar un elemento Padre
            let tiempo=2000
            cy.visit("https://demo.seleniumeasy.com/table-records-filter-demo.html")
            cy.wait(tiempo)
            cy.get("[type='button']").parent().should("have.class","btn-group") //aqui esta validando que el padre si es la clase btn-group
            
            
         })   
         
    it("Reto de las tablas", () =>{ //darle click a ALL y seleccionar todos los chexbox
            let tiempo=2000
            cy.visit("https://demo.seleniumeasy.com/table-records-filter-demo.html")
            cy.get("[type='button']").eq(4).should("contain","All").click({force:true}) 
            cy.wait(tiempo) 
            cy.get("[type='checkbox']").check({force:true}) 

     })  


     it("Reto de las tablas con FOR y Assert", () =>{ //darle click a ALL y seleccionar todos los chexbox
        let tiempo=2000
        cy.visit("https://demo.seleniumeasy.com/table-records-filter-demo.html")
       
       for(let x=1; x<=4; x++){ //todo lo que esta dentro{}se repite
            
            let nombreBoton=""   //todo los if y else if son los Asserts/validaciones
            if(x==1){
                nombreBoton="Green"
            }
            else if(x==2){
                nombreBoton="Orange"
            }
            else if(x==3){
            nombreBoton="Red"
            }
            else if(x==4){
            nombreBoton="All"
            }


            cy.get("[type='button']").eq(x).should("contain",nombreBoton).click({force:true}) 
            cy.wait(tiempo) 
            cy.get("[type='checkbox']").check({force:true}) 
            cy.wait(tiempo) 

        }


       })   

       it("Reto de las tablas DOS", () =>{ //visualizar todos los campos de tabla
        cy.visit("http://demo.seleniumeasy.com/table-sort-search-demo.html")
        const datos=[]
        
        cy.get("[role='row'] td").each(($el,index,$list)=>{ //td es un elemento que trae parecido a class
              datos[index]=$el.text()
        }).then(()=>{
           for(let i=1; i<=datos.length; i++){
              cy.log(datos[i])
           }
         
        })
    })

    it("Reto de las tablas DOS Sumar Valores con los elementos tipo role row ", () =>{ //se sumaran los numeros de la edad
        cy.visit("http://demo.seleniumeasy.com/table-sort-search-demo.html")
        const datos=[]
        let cantidadOdd=0  //de la class Odd
        
        cy.get("[role='row'] td").each(($el,index,$list)=>{ //td es un elemento que trae parecido a class
              datos[index]=$el.text()
        }).then(()=>{
           for(let i=1; i<=datos.length; i++){
              cy.log(datos[i])
              if(Number(datos[i])){
                  cantidadOdd+=Number(datos[i])
              }
           }
         cy.log("la cantidad total es: " +  cantidadOdd)
            expect(cantidadOdd).to.eq(394)   //validamos que sea la cantidad, el assert
        })
    })

    it.only("Reto de las tablas DOS valor de campo en especifico", () =>{ //edad de los javascript developer
        cy.visit("http://demo.seleniumeasy.com/table-sort-search-demo.html")
        const campo=cy.get("tbody > :nth-child(7) > :nth-child(2)")
         
        campo.each(($el,index,$list)=>{
               const dato=$el.text()
               cy.log(dato)

               if(dato.includes("Javascript Developer")){
                  campo.eq(index).next().next().then((age)=>{ //con el then le decimos que cree una variable que se llame age
                  const edad=age.text()
                  cy.log(edad)
                  })

               }
              
            }) 
    })
 })