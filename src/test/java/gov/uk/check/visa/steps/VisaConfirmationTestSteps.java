package gov.uk.check.visa.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import gov.uk.check.visa.pages.StartPage;
import gov.uk.check.visa.pages.WorkPage;

public class VisaConfirmationTestSteps {
    @Given("^User on homepage$")
    public void userOnHomepage() {

    }

    @When("^User click on accept Cookies$")
    public void userClickOnAcceptCookies() {
        new StartPage().clickOnAcceptAdditionalCookies();

    }

    @And("^User click on start button$")
    public void userClickOnStartButton() {
        new StartPage().clickOnStartNowButton();
    }


    @And("^User should select nationality from drop down list Australia$")
    public void userShouldSelectNationalityFromDropDownListAustralia() {
        new StartPage().clickNationalityAustralia();
    }

    @And("^User click on Continue Button$")
    public void userClickOnContinueButton() {
        new StartPage().clickOnContinueButton();

    }

    @And("^User click on Tourism or Visiting Family And Friends$")
    public void userClickOnTourismOrVisitingFamilyAndFriends() {
        new StartPage().clickOntReasonTourismOrVisitingFamilyAndFriends();
    }

    @Then("^User should verify text \"([^\"]*)\"$")
    public void userShouldVerifyText(String mes)  {
        new StartPage().getYouWillNotNeedAVisaToComeToTheUkText();

    }

    @And("^User select nationality from Drop Down list Chile$")
    public void userSelectNationalityFromDropDownListChile() {
        new WorkPage().clickOnNationalityChile();
        
    }

    @And("^User click on Work,academic visit or business$")
    public void userClickOnWorkAcademicVisitOrBusiness() {
        new WorkPage().clickOnWorkAcademicVisitOrBusiness();
        
    }

    @And("^User click on  longer than (\\d+) months$")
    public void userClickOnLongerThanMonths(int arg0) {
        new WorkPage().clickOnLongerThan6Month();
        
    }

    @And("^User click on Health and care professional$")
    public void userClickOnHealthAndCareProfessional() {
        new WorkPage().clickOnHealthAndCareProfessional();
        
    }

    @Then("^User verify text You need a visa to work in health and care$")
    public void userVerifyTextYouNeedAVisaToWorkInHealthAndCare() {
        new WorkPage().getYouWillNeedAVisaToComeToTheUkText();
    }

    @And("^User select nationality from drop down list Colombia$")
    public void userSelectNationalityFromDropDownListColombia() {
        new WorkPage().clickOnNationalityColombia();
    }

    @And("^User click on Join partner or family for a long stay$")
    public void userClickOnJoinPartnerOrFamilyForALongStay() {
        new WorkPage().cickOnJoinPartnerOrFamilyForAlongStay();

    }

    @Then("^User should verify text You may need a visa$")
    public void userShouldVerifyTextYouMayNeedAVisa() {
        new WorkPage().getYouMayNeedAVisa();

    }
}
