require('cypress-xpath')
 import 'cypress-file-upload'
 require('@4tw/cypress-drag-drop')

 describe("Bucles For y Each", () => {

    it(" For Uno", () =>{   //incrementa de uno en uno
        let tiempo=2000
    for(let i=1; i<=10; i++){
        cy.log("numero: " + i)
           }
      });
       

      it(" For Uno", () =>{   //incrementa de 10 en 10
        let tiempo=2000
    for(let i=1; i<=100; i=i+10){
        cy.log("numero: " + i)
           }
      });

      
      it(" For Uno", () =>{   //tabla del 5
        let tiempo=2000
    for(let i=1; i<=10; i++){
        let t=5
        cy.log(t + "X" + i + "=" + t*i)
           }
      });
     })


