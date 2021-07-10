Feature: Sort products feature

     Scenario: User to Sort products by (A to Z)
    
        Given User should be logged in
        When User select name a to z  
        Then User should be able to view products with a to z order  
    
     Scenario: User to Sort products by (Z to A)
    
        Given User should be logged in
        When User select name z to a  
        Then User should be able to view products with z to a order  

     Scenario: User to Sort products by Price (low to high)

        Given User should be logged in
        When User select price low to high  
        Then User should be able to view products with price low to high 

     Scenario: User to Sort products by Price (high to low)
    
        Given User should be logged in
        When User select price high to low   
        Then User should be able to view products with price high to low 