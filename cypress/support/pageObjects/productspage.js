class productspage
{
// Selector for available products 
getInventoryitems()
{
    return cy.get('[class="inventory_item_name"]')
}
// Selector for price low to high 
getPricelowtohigh()
{
    return cy.get(':nth-child(1) > .inventory_item_description > .pricebar > .inventory_item_price')
}
// Selector for price high to low
getPricehightolow()

{
    return cy.get(':nth-child(1) > .inventory_item_description > .pricebar > .inventory_item_price')
}

}
export default productspage;