Feature: Login functionality

    
    Scenario: User to login with valid credentials

        Given User is on the saucedemo login page
        When User enters username and password
        And User clicks on login button
        Then User should be loggedin successfully

    Scenario: User to login with an invalid username
    
        Given User is on the saucedemo login page
        When User enters the wrong username and password
        And User clicks on loginbutton
        Then The error message should appear

