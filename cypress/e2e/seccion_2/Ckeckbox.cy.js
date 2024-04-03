 ///<refence types="cypress" /> //para que funcione los comandos

 Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

 describe("Nueva sección CheckBox ", () => {

    it.only("Check Uno ", () =>{
        cy.visit("https://www.tutorialesprogramacionya.com/vueya/simulador.php?cod=10");
        cy.get("[type='checkbox']").check({force: true}); 
    })   
      

         
    it('uso de checkbox COMPANEROS', () => {
        cy.visit("https://testingqarvn.com.es/prueba-de-campos-checkbox/");
        cy.title().should('eq', 'Prueba de campos Checkbox | TestingQaRvn');
         cy.wait(1000);
        cy.get('[type="checkbox"]').check({force: true}); 
        })
      
    })  
 