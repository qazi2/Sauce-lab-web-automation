class logoutpage
{
// Selector for menu button
getMenubutton()
{
    return cy.get('#react-burger-menu-btn')
}
// Selector for logout button
getLogoutbutton()
{
    return cy.get('#logout_sidebar_link')
}

}

export default logoutpage;