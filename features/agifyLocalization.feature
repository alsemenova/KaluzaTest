Feature: API tests for age estimation by name and country

  @positiveLoc
  Scenario: Get age for valid name and country
    Given The Agify API Client is available
    When I send a request with name "billybob" and country_id "FR"
    Then The result should be successful
    And The country_id should be "FR"

  @positiveLoc
  Scenario: Get age for valid name and lowercase letters in country
    Given The Agify API Client is available
    When I send a request with name "billybob" and country_id "fr"
    Then The result should be successful
    And The country_id should be uppercase "FR"
    Then The result in console log

  @negativeLoc
  Scenario: Get age for valid name but empty country
    Given The Agify API Client is available
    When I send a request with name "billybob" and country_id ""
    Then The result should be successful
    And The country_id should be empty
    Then The result in console log

  @negativeLoc
  Scenario: Get age for valid name but country is number
    Given The Agify API Client is available
    When I send a request with name "billybob" and country_id "34"
    Then The result should be successful
    And The age should be null
    And The country_id should be "34"
    Then The result in console log

  @negativeLoc
  Scenario: Get age for empty name and country
    Given The Agify API Client is available
    When I send a request with empty name and empty country ID
    Then The result should be successful
    And The age should be null
    And The country_id should be empty
    And The result in console log

  @negativeLoc
  Scenario: Get age for valid name and long value of country
    Given The Agify API Client is available
    When I send a request with name "billybob" and country_id "FRRFFFGGHJHJKDGSFD"
    Then The result should be successful
    And The age should be null
    And The country_id should be "FRRFFFGGHJHJKDGSFD"
    Then The result in console log
