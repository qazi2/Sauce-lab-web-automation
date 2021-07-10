/// <reference types="Cypress" />

import {Given,When,Then,And} from "cypress-cucumber-preprocessor/steps"
import loginpage from "../pageObjects/loginpage"
import logoutpage from "../pageObjects/logoutpage"

const loginPage = new loginpage();
const logoutPage = new logoutpage();

// User to verify item inside menu 

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


Then('The item list should be visible',()=>
{
    cy.get('.bm-menu').should('be.visible');
    cy.get('#inventory_sidebar_link').should('be.visible')
    cy.get('#about_sidebar_link').should('be.visible')
    cy.get('#logout_sidebar_link').should('be.visible')
    cy.get('#reset_sidebar_link').should('be.visible')
    
});
