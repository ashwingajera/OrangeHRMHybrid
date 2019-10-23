Feature: To verify user can login with valid credentials successfully and see

  Background:
    Given User is  on homepage
  @login
  Scenario: User should able to login successfully with valid username and valid password and see success message

    When User enter valid username and valid password
    Then User should be navigated to dashboard page



  @notLogin

  Scenario Outline:User should not able to login with invalid credentials and see error message

    When User enter  "<username>" and  "<password>"
    Then User should able not able to login  and see "<error message>"
    Examples:
      | username | password | error message            |
      | Admin    | admin321 | Invalid credentials    |
      | adnim    | admin123 | Invalid credentials      |
      | adnim    | admin321 | Invalid credentials      |
      | Admin    |          | Password cannot be empty |
      |          | admin123 | Username cannot be empty |
      |          |          | Username cannot be empty |