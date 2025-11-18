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
