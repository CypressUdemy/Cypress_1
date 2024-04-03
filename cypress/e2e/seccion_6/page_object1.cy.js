import ProyectoUno_PO from '../../support/PageObjects/ProyectoUno/ProyectoUno.cy'
///<refence types='cypress' />
require('cypress-xpath')
import 'cypress-file-upload'
require('@4tw/cypress-drag-drop')

describe('Page Object Model', () => { 
  
    const master=new ProyectoUno_PO()
    master.visitaPagina()
    Cypress.on('uncaught:exception', (err, runnable) =>{  //este codigo es cuando presenta error sin sentidos
        return false
    })    

it("TEST seccion uno", () =>{ 
    master.seccionUno("carla","silva","carlasi@gmail.com",1000)
    })

it.only("TEST seccion dos", () =>{ 
    master.seccionDos("4","alto grande","guatire","Colorado",1000, {timeout:6000})
    cy.validar_campos2("[data-bv-validator='phone']","Please supply a vaild phone number with area code","telefono",1000)
}) 
    
it("TEST seccion tres", () =>{ 
     master.seccionTres("2121","www.carlita.com","demo de pruebas",1000)
    })      

it("TEST TODAS las secciones", () =>{ 
    master.seccionUno("carla","silva","carlasi@gmail.com",1000)
    master.seccionDos("2123630024","alto grande","guatire","Colorado",1000, {timeout:6000})
    master.seccionTres("2121","www.carlita.com","demo de pruebas",1000)
    })   

})
