/// <reference types="Cypress" />

import {Given,When,Then,And} from "cypress-cucumber-preprocessor/steps"
  import loginpage from "../pageObjects/loginpage"
  import aboutpage from "../pageObjects/aboutpage"
  import logoutpage from "../pageObjects/logoutpage"
  
  const loginPage = new loginpage();
  const aboutPage = new aboutpage();
  const logoutPage = new logoutpage();
  
  // User should be able to navigate about page 
  
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
  
  And('User clicks on about button',()=>
      {
          aboutPage.getAboutbutton().click();
      });
  Then('User should be redirected to about page',()=>
  {
      cy.url().should('include','saucelabs');
      cy.get('.hero-body > .container > .columns').should('be.visible');
  });
