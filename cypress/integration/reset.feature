Feature: Reset app state functionality

    
    Scenario: User to reset app state

        Given User should be logged in
        When User adds an item to the cart
        And User clicks on reset app state button
        Then The item should be removed from the cart
        And Item remove button should be changed to Add to cart
       