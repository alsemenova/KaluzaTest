Feature: API tests for age estimation by multiple name

  @positiveM
  Scenario: Get age for valid multiple name
    Given The Agify API Client is available
    When I send a request with multiple names:
      | name     |
      | billybob |
      | matthew  |
      | jane     |
    Then The result should be successful
    And The response should contain 3 results
    And Each result should include name, age and count
    And The names in response should be:
      | billybob |
      | matthew  |
      | jane     |
    Then The result in console log

  @negativeM
  Scenario: Get age for multiple empty names
    Given The Agify API Client is available
    When I send a request with 3 empty multiple names
    Then The result should be successful
    And The response should contain 3 results
    And All names in the response should be empty
    And All ages in the response should be null
    And Each result should include name, age and count
    Then The result in console log
