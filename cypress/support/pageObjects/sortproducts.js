class sortproducts
{
// Selector for menu button
getsortButton()
{
    return cy.get('[data-test=product_sort_container]')
}

}

export default sortproducts;