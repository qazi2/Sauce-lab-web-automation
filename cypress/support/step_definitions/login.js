/// <reference types="Cypress" />

import {Given,When,Then,And} from "cypress-cucumber-preprocessor/steps"
import loginpage from "../pageObjects/loginpage"
import productspage from "../pageObjects/productspage"

const loginPage = new loginpage();
const productsPage = new productspage();

// User to login with valid credentials

Given('User is on the saucedemo login page',()=>
{
    cy.visit(Cypress.env('url'));
});

When('User enters username and password',()=>
{
    loginPage.getUsername().type("performance_glitch_user");
    loginPage.getPassword().type("secret_sauce");

});

And('User clicks on login button',()=>
    {
        loginPage.getLoginbutton().click()
    });
Then('User should be loggedin successfully',()=>
{
    cy.url().should('include','/inventory.html');
    productsPage.getInventoryitems().should(($item1) => {
        expect($item1).to.have.length(6)
      });
    
});

// User to login with an invalid username

When('User enters the wrong username and password',()=>
{
    loginPage.getUsername().type("performance_glitch_user_23");
    loginPage.getPassword().type("secret_sauce12");

});

And('User clicks on loginbutton',()=>
    {
        loginPage.getLoginbutton().click()
    });
Then('The error message should appear',()=>
{
    cy.contains('Epic sadface: Username and password do not match any user in this service');
});

