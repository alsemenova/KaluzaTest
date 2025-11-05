Feature: API tests for age estimation by name and country

  @positiveLoc
  Scenario: Get age for valid name and country
    Given The Agify API Client is available
    When I send a request with name "billybob" and country_id "FR"
    Then The result should be successful
    And The country_id should be "FR"

  @negativeLoc
  Scenario: Get age for valid name but empty country
    Given The Agify API Client is available
    When I send a request with name "billybob" and country_id ""
    Then The result should be successful
    And The country_id should be empty
    Then The result in console log
