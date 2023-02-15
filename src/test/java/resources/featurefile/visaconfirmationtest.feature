Feature: Visa Confirmation Test
  User should be able to visit gov.uk visa website

  Scenario: User from Australia should be able to confirm Uk visa
    Given User on homepage
    When User click on accept Cookies
    And User click on start button
    And User should select nationality from drop down list Australia
    And User click on Continue Button
    And User click on Tourism or Visiting Family And Friends
    And User click on Continue Button
    Then User should verify text "You will not need a visa to come to the Uk"

    Scenario: User from Chile should be able to come to Uk for work and plans On Staying for longer than six months visa
      Given User on homepage
      When User click on accept Cookies
      And User click on start button
      And User select nationality from Drop Down list Chile
      And User click on Continue Button
      And User click on Work,academic visit or business
      And User click on Continue Button
      And User click on  longer than 6 months
      And User click on Continue Button
      And User click on Health and care professional
      And User click on Continue Button
      Then User verify text You need a visa to work in health and care

      Scenario: User form Colombia coming to Uk should be able to confirm Join partner for a long stay visa
        Given User on homepage
        When User click on accept Cookies
        When User click on start button
        And User select nationality from drop down list Colombia
        And User click on Continue Button
        And User click on Join partner or family for a long stay
        And User click on Continue Button
        Then User should verify text You may need a visa



