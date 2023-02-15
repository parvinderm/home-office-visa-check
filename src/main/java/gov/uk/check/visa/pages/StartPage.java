package gov.uk.check.visa.pages;

import gov.uk.check.visa.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class StartPage extends Utility {
    private static final Logger log = LogManager.getLogger(StartPage.class.getName());

    public StartPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//div[@class='govuk-cookie-banner js-banner-wrapper']/div/div[2]/button[1]")
    WebElement AcceptadditionalCookies;
    @FindBy(xpath = "//a[@class='gem-c-button govuk-button govuk-button--start']")
    WebElement startNowButton;
    @FindBy(xpath = "//select[@id='response']/option[11]")
    WebElement nationalityAustralia;
    @FindBy(xpath = "//button[contains(text(),'Continue')]")
    WebElement ContinueButton;
    @FindBy(xpath = "//input[@id='response-0']")
    WebElement TourismOrVisitingFamilyAndFriends;
//    @FindBy(xpath = "//button[contains(text(),'Continue')]")
//    WebElement ContinueButton;
    @FindBy(xpath = "//h2[contains(text(),'You will not need a visa to come to the UK')]")
    WebElement youWillNotNeedAVisaToComeToTheUkText;



    public void clickOnAcceptAdditionalCookies() {
       clickOnElement(AcceptadditionalCookies);

    }

    public void clickOnStartNowButton() {
        clickOnElement(startNowButton);
        log.info("clicking on Start Now Button :" + startNowButton.toString());
    }

    public void clickNationalityAustralia() {
       clickOnElement(nationalityAustralia);
    }

    public void clickOnContinueButton() {
        clickOnElement(ContinueButton);
    }

    public void clickOntReasonTourismOrVisitingFamilyAndFriends() {
        clickOnElement(TourismOrVisitingFamilyAndFriends);
    }

//    public void clickOncontinueButton() {
//        clickOnElement(ContinueButton);
//    }

    public String getYouWillNotNeedAVisaToComeToTheUkText() {
        return getTextFromElement(youWillNotNeedAVisaToComeToTheUkText);
    }



}
