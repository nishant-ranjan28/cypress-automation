 /// <reference types = "Cypress"/>

describe('My first test suit', () => {

    it("My first test case", () => {

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");

        cy.get('.search-keyword').type('ca');

       cy.get('.product').should('have.length', 5);
       cy.get('.products').find('.product').should('have.length', 4);

    })

    it("click on cart logo", () => {
        cy.get(':nth-child(1) > .product-action > button').click();
        cy.get('.products').find('.product').eq(3).contains('ADD TO CART').click();
       
        cy.get('.cart-icon > img').click();
        cy.get("div[class='cart-preview active'] button[type='button']").click();

        cy.get('.promoCode').type('rahulshettyacademy');
        cy.get('.promoBtn').click();

        cy.wait(4000);
        cy.get('.promoInfo').should('have.text', 'Code applied ..!');


    })

})