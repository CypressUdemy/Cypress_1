 ///<refence types="cypress" /> //para que funcione los comandos

 require('cypress-xpath')

 describe("SELECT ", () => {

    it("SELECT UNO ", () =>{
        cy.visit("https://www.google.com/")
        cy.get('#APjFqb').should("be.visible").type("ferrari").type("{enter}")
        cy.xpath("//span[@class='FMKtTb UqcIvb'][contains(.,'Imágenes')]").click()       
        })
 
   //it("MULTI SELECT ", () =>{
        //cy.visit("https://wwwjsjndsdninfnf")
        //cy.get("multi-select").should("be.visible").select(["ohio","vzla","peru"])
           
      //})
    
   it.only("select DOS ", () =>{
         cy.visit("https://practice.automationtesting.in/shop/")
         cy.xpath("//select[contains(@name,'orderby')]").select("Sort by average rating")// le coloque lo textual que decia,no traia ID o Class
     
   })   
})   