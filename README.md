# KaluzaTest

Agify API BDD Test Suite
This project was created as part of the QA Engineer Technical Test for Kaluza.
It contains automated BDD API tests written in TypeScript and executed using Cucumber.js.

Project Description
This test suite validates the functionality of the public API agify.io,
which estimates the age of a person based on their name.
The purpose of these tests is not to verify the accuracy of returned data,
but to ensure that the API behaves correctly for various input types and edge cases.

Tech Stack
Language: TypeScript
Framework: Cucumber.js
Assertion Library: Chai
HTTP Client: Axios
Runtime: Node.js
Test Runner: npm test

Project Structure
KaluzaTest/
├── features/ # BDD feature files written in Gherkin
│ └── agify.feature # Scenarios describing API behavior

├── step_definitions/ # Step definitions for Cucumber
│ └── agify.steps.ts # Code implementation of Gherkin steps

├── src/ # Main source code folder
│ ├── api/ # API clients and models
│ │ ├── agifyApiClient.ts # Wrapper class for Agify API (handles requests)
│ │ └── result.ts # Result model for handling success/error states
│ │
│ └── support/ # Cucumber test context and utilities
│ └── world.ts # Custom World class storing client and response data

├── cucumber.js # Cucumber configuration file
├── package.json # Project configuration, scripts, dependencies
├── package-lock.json # Automatically generated dependency lock file
├── tsconfig.json # TypeScript compiler configuration
└── README.md # Project documentation

Installation and Setup
Prerequisites
Node.js v18 or higher
npm v9 or higher
Steps

1. Clone the repository:
   git clone https://github.com/alsemenova/KaluzaTest.git
   cd KaluzaTest
2. Install dependencies:
   npm install
3. Run the tests:
   npm test

Test Scenarios
The suite includes both positive and negative tests.

✅ Positive Get age for valid name (API returns age for a normal name)
✅ Positive The same name returns consistent results (Ensures the same input gives the same output)
❌ Negative Get age with empty name (API handles empty parameter)
❌ Negative Get age with numeric name (Numeric input returns null age)
❌ Negative Missing parameter in request (Request without “name” returns error)
❌ Negative Wrong request (Invalid endpoint returns failure)
❌ Negative Long name (Handles long strings gracefully)
❌ Negative Special characters (API handles special symbols without crash)

Design Notes
The project uses a Result pattern to encapsulate responses and simplify assertions.
CustomWorld stores the client and last result for each scenario.
Tests are organized in BDD style to make them readable and business-oriented.
The test design checks response validity, error handling, and consistency.

Example Test Run
npm test

Example output:
8 scenarios (8 passed)
31 steps (31 passed)

Node & NPM Versions
Node: v20.17.0
npm: v10.8.2

🧑‍💻 Author
Elena Semenova
📍 Melbourne, Australia
✉️ alenasemenova9@gmail.com
🔗 LinkedIn www.linkedin.com/in/elena-semenova-digital
