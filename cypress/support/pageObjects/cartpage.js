class cartpage
{

// Selector for cart link
getCartlink()
{
    return cy.get('#shopping_cart_container > a')
}

// Selector for cart list
getCartlist()
{
    return cy.get('#cart_contents_container > div > div.cart_list')
}
// Selector for checkout button
getCheckoutbtn()
{
    return cy.get('#checkout')
}

}

export default cartpage;
