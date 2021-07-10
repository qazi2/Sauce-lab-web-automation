/// <reference types="Cypress" />

import {Given,When,Then,And} from "cypress-cucumber-preprocessor/steps"
import loginpage from "../pageObjects/loginpage"
import logoutpage from "../pageObjects/logoutpage"

const loginPage = new loginpage();
const logoutPage = new logoutpage();

// User to logout from the sauce demo web app

Given('User should be logged in',()=>
{
    cy.visit(Cypress.env('url'));
    loginPage.getUsername().type("performance_glitch_user");
    loginPage.getPassword().type("secret_sauce");
    loginPage.getLoginbutton().click();
    cy.url().should('include','/inventory.html');
    
});

When('User clicks on menu button',()=>
{
    logoutPage.getMenubutton().click();
});

And('User clicks on logout button',()=>
    {
        logoutPage.getLogoutbutton().click();
    });
Then('User should be logged out successfully',()=>
{
    cy.get('#login-button').should('be.visible');
    
});
