require('cypress-xpath')
import 'cypress-file-upload'
require('@4tw/cypress-drag-drop')

describe('Comandos Personalizados', () => { 
 
   before(() =>{ // se repite en cada uno de los test   
    cy.visit('https://demoqa.com/')
    cy.get('.category-cards > :nth-child(2)').click()//campo FORMS
    cy.get(':nth-child(1) > .group-header > .header-wrapper').click()// campo elements
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').click()// campo tex box
    cy.wait(1500)
     })


// it('Demo Uno', () =>{ 
//     cy.campo_visible("#userName","katherine")
//     cy.campo_visible("#userEmail","kather11@gmail.com")
//      })
  
//   it('Demo Dos', () =>{    
//      cy.campo_xpath("//textarea[contains(@id,'currentAddress')]","guatire")
//   })

  it('Demo por bloque completo', () =>{    
      cy.bloque_demoqa("daniela","kather11@gmail.com","guatire1","guatire2",1000)
  })

})

