Feature: API tests for age estimation by name and country

  @positive
  Scenario: Get age for valid name and country
    Given The Agify API Client is available
    When I send a request with name "billybob" and country_id "FR"
    Then The result should be successful
    And The age is presented
