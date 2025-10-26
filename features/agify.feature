Feature: API tests for age estimation by name

  @positive
  Scenario: Get age for valid name
    Given The Agify API Client is available
    When I send a request with name "billybob"
    Then The result should be successful
    And The age is presented

  @negative
  Scenario: Get age with empty name
    Given The Agify API Client is available
    When I send a request with name ""
    Then The result should be successful
    And The age should be null

  @negative
  Scenario: Get age with a numeric name
    Given The Agify API Client is available
    When I send a request with name "1234"
    Then The result should be successful
    And The age should be null

  @negative
  Scenario: Missing parametr in request
    Given The Agify API Client is available
    When I send a request with missing parameter name
    Then The result should be Failed
    And The error should be "Missing \'name\' parameter"

  @negative
  Scenario: Get age with a long name
    Given The Agify API Client is available
    When I send a request with name "dsfghjklkjhgfdfghjkl;lkjuhygtfrdfghjklkjhgfdsdfghjkjhgfdfghjk"
    Then The result should be successful
    And The age should be null

  @negative
  Scenario: Send wrong request
    Given The Agify API Client is available
    When I send wrong request
    Then The result should be Failed
    And Throw an Exeption

  @negative
  Scenario: Get age with a name containing special characters
    Given The Agify API Client is available
    When I send a request with name "@!#±§"
    Then The result should be successful
    And The age should be null

  @positive
  Scenario: The same name returns consistent results
    Given The Agify API Client is available
    When I send a request with name "billybob"
    Then The result of the same request with name "billybob" should be the same
