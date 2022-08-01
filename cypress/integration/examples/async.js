/// <reference types = 'Cypress'/>

describe('resolve promis', () => {
    it('will resolve the promise', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        
        cy.get('.brand').then(function(logo){
            cy.log(logo.text())
          })
    })
})