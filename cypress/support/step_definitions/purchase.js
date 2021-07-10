/// <reference types="Cypress" />

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import loginpage from "../pageObjects/loginpage"
import cartpage from "../pageObjects/cartpage"
import checkoutpage1 from "../pageObjects/checkoutpage1"
import checkoutpage2 from "../pageObjects/checkoutpage2"
import chaiSorted from 'chai-sorted'
chai.use(chaiSorted)

const loginPage = new loginpage();
const cartPage = new cartpage();
const checkoutPage1 = new checkoutpage1();
const checkoutPage2 = new checkoutpage2();


// User to add multiple items in cart and perform a successfull purchase

Given('User should be logged in', () => {
    cy.visit(Cypress.env('url'));
    loginPage.getUsername().type("performance_glitch_user");
    loginPage.getPassword().type("secret_sauce");
    loginPage.getLoginbutton().click();
    cy.url().should('include', '/inventory.html');

});

When('User adds multiple items to the cart', () => {
    
    cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click();
    cy.get('[data-test=add-to-cart-sauce-labs-fleece-jacket]').click();
    cartPage.getCartlink().click();
    cy.url().should('include', '/cart.html');
    cartPage.getCartlist().should('have.length.gt', 0);
    cartPage.getCheckoutbtn().click();
    cy.url().should('include', '/checkout-step-one.html')
});

And('User enters its information', () => {
    
   checkoutPage1.getFirstname().type("Qazi");
   checkoutPage1.getLastname().type("Mujahid");
   checkoutPage1.getPostcode().type("80637");
   
});

And('User clicks on continue button', () => {
    
   checkoutPage1.getContinuebtn().click();

});

And('User validates the total sum', () => {
    cy.url().should('include', '/checkout-step-two.html')
    cy.get('.title').should("have.text","Checkout: Overview");
    checkoutPage2.getSummarycontainer().should('be.visible');
    checkoutPage2.getPaymentinfo().should("have.text", "Payment Information:");
    checkoutPage2.getPaymentinfotext().should("have.text", "SauceCard #31337");
    checkoutPage2.getShippinginfo().should("have.text", "Shipping Information:");
    checkoutPage2.getShippinginfotext().should("have.text", "FREE PONY EXPRESS DELIVERY!");
    checkoutPage2.getItemtotal().should("have.length", 1);
    checkoutPage2.getTax().should('have.length', 1);
    checkoutPage2.getTotal().should('have.length', 1);
    
    checkoutPage2.getFinishbtn().click();

});

Then('The purchase should be completed successfully', () => {
    
   cy.url().should('include', '/checkout-complete.html')
   cy.get('.complete-header').should("have.text", "THANK YOU FOR YOUR ORDER")
   cy.get('#checkout_complete_container > img').should('be.visible')
   cy.get('[data-test=back-to-products]').should('be.visible')
});



