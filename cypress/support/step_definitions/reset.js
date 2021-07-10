/// <reference types="Cypress" />

import {Given,When,Then,And} from "cypress-cucumber-preprocessor/steps"
import loginpage from "../pageObjects/loginpage"
import logoutpage from "../pageObjects/logoutpage"
import resetpage from "../pageObjects/resetpage"


const loginPage = new loginpage();
const logoutPage = new logoutpage();
const resetPage = new resetpage();

// User to reset app state

Given('User should be logged in',()=>
{
    cy.visit(Cypress.env('url'));
    loginPage.getUsername().type("performance_glitch_user");
    loginPage.getPassword().type("secret_sauce");
    loginPage.getLoginbutton().click();
    cy.url().should('include','/inventory.html');
    
});

When('User adds an item to the cart',()=>
{
    resetPage.getaddBagbackitem().click();
    cy.get('.shopping_cart_badge').should('be.visible')
    resetPage.getremBagbackitem().should('be.visible');

});

And('User clicks on reset app state button',()=>
    {
       logoutPage.getMenubutton().click();
       resetPage.getresetbutton().click(); 
    });
Then('The item should be removed from the cart',()=>
{
    
    cy.get('.shopping_cart_badge').should('not.be.visible');
    
});
And('Item remove button should be changed to Add to cart',()=>
    {
        resetPage.getaddBagbackitem().should('be.visible');
    });


