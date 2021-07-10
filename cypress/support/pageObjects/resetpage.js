class resetpage
{
// Bag pack item selector
getaddBagbackitem()
{
    return cy.get('[data-test=add-to-cart-sauce-labs-backpack]')
}
// shopping cart item link selector
getShoppingcartlink()
{
    return cy.get('.shopping_cart_link')
}
// remove back pack item button selector
getremBagbackitem()
{
    return cy.get('[data-test=remove-sauce-labs-backpack]')
}
// reset button selector
getresetbutton()
{
    return cy.get('#reset_sidebar_link')
}

}

export default resetpage;