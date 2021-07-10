class checkoutpage1
{
// Selector for first name
getFirstname()
{
    return cy.get('#first-name')
}
// Selector for last name
getLastname()
{
    return cy.get('#last-name')
}
// Selector for zip code 

getPostcode()
{
    return cy.get('#postal-code')
}

// Selector for continue button
getContinuebtn()
{
    return cy.get('#continue')
}

}

export default checkoutpage1;
