Feature: Logout functionality

    
    Scenario: User to logout from the sauce demo web app

        Given User should be logged in
        When User clicks on menu button
        And User clicks on logout button
        Then User should be logged out successfully 