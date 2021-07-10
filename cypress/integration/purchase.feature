Feature: Complete a purchase

    
    Scenario: User to add multiple items in cart and perform a successfull purchase

        Given User should be logged in
        When User adds multiple items to the cart
        And User enters its information
        And User clicks on continue button
        And User validates the total sum
        Then The purchase should be completed successfully
        
