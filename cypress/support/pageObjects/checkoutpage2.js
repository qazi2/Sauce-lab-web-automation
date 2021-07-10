class checkoutpage2
{
// selector for summary item list
getCartsummarylist()
{
    return cy.get('#checkout_summary_container > div > div.cart_list')
}
// Selector for item total
getItemtotal()
{
    return cy.get('.summary_subtotal_label')
}
// Selector for tax label 
getTax()
{
    return cy.get('.summary_tax_label')
}
// Selector for total amount
getTotal()
{
    return cy.get('.summary_total_label')
}
// Selector for finish button
getFinishbtn()
{
    return cy.get('#finish')
}

// Selector for summary container
getSummarycontainer()
{
    return cy.get('#checkout_summary_container > div > div.summary_info')
}

// Selector for payment information
getPaymentinfo()
{
    return cy.get('.summary_info > :nth-child(1)')
}
// Selector for shipping information
getShippinginfo()
{
    return cy.get('.summary_info > :nth-child(3)')
}
// Selector for payment information text
getPaymentinfotext()
{
    return cy.get('.summary_info > :nth-child(2)')
}
// Selector for shipping info text
getShippinginfotext()
{
    return cy.get('.summary_info > :nth-child(4)')
}   

}

export default checkoutpage2;
