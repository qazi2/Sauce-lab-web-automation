class loginpage
{
// Selector for user name
getUsername()
{
    return cy.get('#user-name')
}
// Selector for password
getPassword()
{
    return cy.get('#password')
}
// Selector for Login button
getLoginbutton()
{
    return cy.get('#login-button')
}

}
export default loginpage;