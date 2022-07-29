/// <reference types = "Cypress"/>

describe("My first test suit", () => {
  it("My first test case", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");

    cy.get(".search-keyword").type("ca");

    cy.get(".product").should("have.length", 5);
    cy.get(".product:visible").should("have.length", 4);
    cy.get(".products").find(".product").should("have.length", 4);
  });

  it("click on cart logo", () => {
    //add to cart
    cy.get(":nth-child(1) > .product-action > button").click();
    cy.get(".products").find(".product").eq(1).contains("ADD TO CART").click();

    //use loops to add all the products to cart
    cy.get(".products")
      .find(".product")
      .each(($el, index, $list) => {
        const textVeg = $el.find("h4.product-name").text();

        if (textVeg.includes("Cashews")) {
          cy.wrap($el).find("button").click();
          //cy.wrap($el).find(contains('ADD TO CART')).click();
        }
      });

    //click on crt logo
    cy.get(".cart-icon > img").click();
    cy.get("div[class='cart-preview active'] button[type='button']").click();

    //apply coupon
    cy.get(".promoCode").type("rahulshettyacademy");
    cy.get(".promoBtn").click();

    cy.wait(4000);
    cy.get(".promoInfo").should("have.text", "Code applied ..!");
  });
});
