require('cypress-xpath')
import 'cypress-file-upload'
require('@4tw/cypress-drag-drop')

describe('Custon reto', () => { 
 
   beforeEach(() =>{ // se repite en CADA IT
    cy.visit('https://demo.seleniumeasy.com/input-form-demo.html')
    cy.wait(1500)
     })

  
  it('Demo por bloque completo RETO', () =>{    
    cy.bloque_retocuston("carla","silva","kather11@gmail.com","2123659366","encantado","miranda","Florida","1221","www.kathebien.com","reto de custon", 1000)
  })

  it('Prueba RETO FALLIDO en nombre', () =>{ // NO DEBERIA TOMARME EL 1234 EN NOMBRE, SALIO POSTIVA   
    cy.bloque_retocuston("1234","silva","kather11@gmail.com","2123659366","encantado","miranda","Florida","1221","www.kathebien.com","reto de custon", 1000)
  })

  it.only('Prueba RETO FALLIDO en CORREO', () =>{ // NO DEBERIA TOMARME EL CORREO, SALIO NEGATIVA
    cy.bloque_retocuston("1234","silva","kather11","2123659366","encantado","miranda","Florida","1221","www.kathebien.com","reto de custon", 1000)
    cy.validar_campo("[data-bv-validator='emailAddress']","Please supply a valid email address","Email", 1500)
    
    cy.validar_campos2("[data-bv-validator='emailAddress']","Please supply a valid email address","Emailllll", 1500) //tengo menos lineas de codigos en el comando
  })
})

