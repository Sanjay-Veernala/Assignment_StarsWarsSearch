Feature: Search for a Star Wars character and Planet
    
    Scenario: By full name
        Given I navigate to "localhost"
        When I search for Luke Skywalkers name
        Then I see Lukes details

    Scenario: Search By Invalid character name
         Given I navigate to "localhost"
         When I search for Sanjays name
         Then I see Message Not Found 

    Scenario: Search By Invalid planet name
        Given I navigate to "localhost"
        When I search for EARTH 
        Then I see Message Not Found 

    Scenario: Search By Full Planet name  
            Given I navigate to "localhost"
            When I search for Bespin 
            Then I see planet Bespin details
            
        Scenario: Search By Partial character name  
            Given I navigate to "localhost"
            When I search for letter a
            Then I see all Names details having letter a

        Scenario: Search By Partial Planet name  
            Given I navigate to "localhost"
            When I search for j letter
            Then I see all planet details having j            

        Scenario: Search after clearing the previous text in search box    
            Given I navigate to "localhost"
            When I search for Luke Skywalkers name
            And  I clear the text from Search Form 
            And I click on search or Enter  
            Then I  see empty results 
