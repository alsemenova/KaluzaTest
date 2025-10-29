# Kaluza BDD Tests

This project was created as part of the QA Engineer Technical Test for Kaluza.
It contains automated BDD API tests written in TypeScript and executed using Cucumber.js.

# The Task

Create BDD scenarios and step definitions to test agify.io. This is a simple API, that accepts one parameter, a name (for example, ‘billybob’), and returns the guesstimated age of a person with this name (for example, ‘59’).
Refer to: https://agify.io/documentation
Include any tests you can think of to ensure that the API functions as expected.

# Project Description

This test suite validates the functionality of the public API agify.io,
which estimates the age of a person based on their name.
The purpose of these tests is not to verify the accuracy of returned data,
but to ensure that the API behaves correctly for various input types and edge cases.

# Tech Stack

Language: TypeScript
Framework: Cucumber.js
Assertion Library: Chai
HTTP Client: Axios
Runtime: Node.js v22, NPM v10

## Project Structure

```
📁 KaluzaTest
┣ 📂 features
┃ ┗ 📄 agifyBasic.feature
┣ 📂 step_definitions
┃ ┗ 📄 agifyBasic.steps.ts
┣ 📂 src
┃ ┣ 📂 api
┃ ┃ ┣ 📄 agifyApiClient.ts
┃ ┃ ┗ 📄 result.ts
┃ ┗ 📂 support
┃ ┗ 📄 world.ts
┣ 📄 cucumber.js
┣ 📄 package.json
┣ 📄 package-lock.json
┣ 📄 tsconfig.json
┗ 📄 README.md
```

# Steps

1. Clone the repository:
   git clone https://github.com/alsemenova/KaluzaTest.git
   cd KaluzaTest
2. Install dependencies:
   npm install
3. Run the tests:
   npm test
4. Or run test + report:
   npm run test-report

# Test Scenarios

The suite includes both positive and negative tests.

- Get age for valid name (API returns age for a normal name)
- The same name returns consistent results (Ensures the same input gives the same output)
- Get age with empty name (API handles empty parameter)
- Get age with numeric name (Numeric input returns null age)
- Missing parameter in request (Request without “name” returns error)
- Request to an invalid endpoint returns error (Invalid endpoint returns failure)
- Long name (Handles long strings gracefully)
- Special characters (API handles special symbols without crash)

# Design Notes

The project uses a Result pattern to encapsulate responses and simplify assertions.
CustomWorld stores the client and last result for each scenario.
Tests are organized in BDD style to make them readable and business-oriented.
The test design checks response validity, error handling, and consistency.

# API Scope

This project tests only the Basic Usage endpoint of the Agify API.
According to the official documentation, Agify provides additional APIs such as Localization, Batch Requests, and Multiple Inputs.
However, since the technical test explicitly required testing the Basic Usage endpoint,
only this part was implemented and validated in the test suite.
