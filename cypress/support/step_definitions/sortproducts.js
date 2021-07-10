/// <reference types="Cypress" />

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import loginpage from "../pageObjects/loginpage"
import productspage from "../pageObjects/productspage"
import sortproducts from "../pageObjects/sortproducts"
import chaiSorted from 'chai-sorted'
chai.use(chaiSorted)

const loginPage = new loginpage();
const sortProducts = new sortproducts();
const productsPage = new productspage();

// User to Sort products by Name (A to Z)

Given('User should be logged in', () => {
    cy.visit(Cypress.env('url'));
    loginPage.getUsername().type("performance_glitch_user");
    loginPage.getPassword().type("secret_sauce");
    loginPage.getLoginbutton().click();
    cy.url().should('include', '/inventory.html');

});

When('User select name a to z', () => {
    sortProducts.getsortButton().select('Name (A to Z)');

});

Then('User should be able to view products with a to z order', () => {

    productsPage.getInventoryitems().should(($item1) => {
        expect($item1).to.have.length(6)
    });
    // Validating first item 
    productsPage.getInventoryitems()
    .eq(0).should("have.text", "Sauce Labs Backpack");
    // Validating last item 
    productsPage.getInventoryitems()
    .eq(5).should("have.text", "Test.allTheThings() T-Shirt (Red)");
});

// User to Sort products by Name (Z to A)

When('User select name z to a', () => {
    sortProducts.getsortButton().select('Name (Z to A)');

});

Then('User should be able to view products with z to a order', () => {

    productsPage.getInventoryitems().should(($item1) => {
        expect($item1).to.have.length(6)
    });
    // Validating first item 
    productsPage.getInventoryitems()
    .eq(0).should("have.text", "Test.allTheThings() T-Shirt (Red)");
    // Validating last item 
    productsPage.getInventoryitems()
    .eq(5).should("have.text", "Sauce Labs Backpack");
});

// User to Sort products by Price (low to high)

When('User select price low to high', () => {
    
    sortProducts.getsortButton().select('Price (low to high)');

});

Then('User should be able to view products with price low to high', () => {

    productsPage.getInventoryitems().should(($item1) => {
        expect($item1).to.have.length(6)
    });
    productsPage.getPricelowtohigh()
    .should('have.length.gt',0)
    .then($price =>{
        // removing "$" from prices and converting to strings
        const prices = $price
        .toArray()
        .map($el => parseFloat ($el.innerText.substr(1)))
        // Using chai-sorted assertion
        expect(prices).to.be.sorted()
        productsPage.getPricelowtohigh()
        .eq(0).should("have.text", "$7.99")
    })

});
// User to Sort products by Price (High to Low)

When('User select price high to low', () => {
    
    sortProducts.getsortButton().select('Price (high to low)');

});

Then('User should be able to view products with price high to low', () => {

    productsPage.getInventoryitems().should(($item1) => {
        expect($item1).to.have.length(6)
    });
    productsPage.getPricehightolow()
    .should('have.length.gt',0)
    .then($price =>{
        // removing "$" from prices and converting to strings
        const prices = $price
        .toArray()
        .map($el => parseFloat ($el.innerText.substr(1)))
        // Using chai-sorted assertion
        expect(prices).to.be.sorted()
        productsPage.getPricehightolow()
        .eq(0).should("have.text", "$49.99")
        
    })

});
