$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefile/visaconfirmationtest.feature");
formatter.feature({
  "line": 1,
  "name": "Visa Confirmation Test",
  "description": "User should be able to visit gov.uk visa website",
  "id": "visa-confirmation-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5201516100,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User from Australia should be able to confirm Uk visa",
  "description": "",
  "id": "visa-confirmation-test;user-from-australia-should-be-able-to-confirm-uk-visa",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User click on accept Cookies",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User click on start button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User should select nationality from drop down list Australia",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User click on Continue Button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User click on Tourism or Visiting Family And Friends",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User click on Continue Button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User should verify text \"You will not need a visa to come to the Uk\"",
  "keyword": "Then "
});
formatter.match({
  "location": "VisaConfirmationTestSteps.userOnHomepage()"
});
formatter.result({
  "duration": 141895100,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationTestSteps.userClickOnAcceptCookies()"
});
formatter.result({
  "duration": 105595800,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationTestSteps.userClickOnStartButton()"
});
formatter.result({
  "duration": 20600653300,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationTestSteps.userShouldSelectNationalityFromDropDownListAustralia()"
});
formatter.result({
  "duration": 34975000,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationTestSteps.userClickOnContinueButton()"
});
formatter.result({
  "duration": 400293800,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationTestSteps.userClickOnTourismOrVisitingFamilyAndFriends()"
});
formatter.result({
  "duration": 57963500,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationTestSteps.userClickOnContinueButton()"
});
formatter.result({
  "duration": 326470300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You will not need a visa to come to the Uk",
      "offset": 25
    }
  ],
  "location": "VisaConfirmationTestSteps.userShouldVerifyText(String)"
});
formatter.result({
  "duration": 50545500,
  "status": "passed"
});
formatter.after({
  "duration": 120200,
  "status": "passed"
});
formatter.before({
  "duration": 1959093400,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "User from Chile should be able to come to Uk for work and plans On Staying for longer than six months visa",
  "description": "",
  "id": "visa-confirmation-test;user-from-chile-should-be-able-to-come-to-uk-for-work-and-plans-on-staying-for-longer-than-six-months-visa",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "User on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "User click on accept Cookies",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User click on start button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User select nationality from Drop Down list Chile",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User click on Continue Button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User click on Work,academic visit or business",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User click on Continue Button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User click on  longer than 6 months",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User click on Continue Button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User click on Health and care professional",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User click on Continue Button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User verify text You need a visa to work in health and care",
  "keyword": "Then "
});
formatter.match({
  "location": "VisaConfirmationTestSteps.userOnHomepage()"
});
formatter.result({
  "duration": 23900,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationTestSteps.userClickOnAcceptCookies()"
});
formatter.result({
  "duration": 124308900,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationTestSteps.userClickOnStartButton()"
});
formatter.result({
  "duration": 20425769600,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationTestSteps.userSelectNationalityFromDropDownListChile()"
});
formatter.result({
  "duration": 34945300,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationTestSteps.userClickOnContinueButton()"
});
formatter.result({
  "duration": 399762300,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationTestSteps.userClickOnWorkAcademicVisitOrBusiness()"
});
formatter.result({
  "duration": 46424300,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationTestSteps.userClickOnContinueButton()"
});
formatter.result({
  "duration": 349927100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 27
    }
  ],
  "location": "VisaConfirmationTestSteps.userClickOnLongerThanMonths(int)"
});
formatter.result({
  "duration": 81333900,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationTestSteps.userClickOnContinueButton()"
});
formatter.result({
  "duration": 348701800,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationTestSteps.userClickOnHealthAndCareProfessional()"
});
formatter.result({
  "duration": 48024300,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationTestSteps.userClickOnContinueButton()"
});
formatter.result({
  "duration": 343475800,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationTestSteps.userVerifyTextYouNeedAVisaToWorkInHealthAndCare()"
});
formatter.result({
  "duration": 41894800,
  "status": "passed"
});
formatter.after({
  "duration": 30000,
  "status": "passed"
});
formatter.before({
  "duration": 1851675300,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "User form Colombia coming to Uk should be able to confirm Join partner for a long stay visa",
  "description": "",
  "id": "visa-confirmation-test;user-form-colombia-coming-to-uk-should-be-able-to-confirm-join-partner-for-a-long-stay-visa",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 29,
  "name": "User on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "User click on accept Cookies",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "User click on start button",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "User select nationality from drop down list Colombia",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User click on Continue Button",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User click on Join partner or family for a long stay",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User click on Continue Button",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User should verify text You may need a visa",
  "keyword": "Then "
});
formatter.match({
  "location": "VisaConfirmationTestSteps.userOnHomepage()"
});
formatter.result({
  "duration": 25600,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationTestSteps.userClickOnAcceptCookies()"
});
formatter.result({
  "duration": 124601800,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationTestSteps.userClickOnStartButton()"
});
formatter.result({
  "duration": 20474404100,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationTestSteps.userSelectNationalityFromDropDownListColombia()"
});
formatter.result({
  "duration": 40871400,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationTestSteps.userClickOnContinueButton()"
});
formatter.result({
  "duration": 436788300,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationTestSteps.userClickOnJoinPartnerOrFamilyForALongStay()"
});
formatter.result({
  "duration": 42221400,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationTestSteps.userClickOnContinueButton()"
});
formatter.result({
  "duration": 331663600,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationTestSteps.userShouldVerifyTextYouMayNeedAVisa()"
});
formatter.result({
  "duration": 36220300,
  "status": "passed"
});
formatter.after({
  "duration": 23500,
  "status": "passed"
});
});