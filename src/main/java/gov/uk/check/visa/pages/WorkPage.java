package gov.uk.check.visa.pages;

import gov.uk.check.visa.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class WorkPage extends Utility {
    private static final Logger log = LogManager.getLogger(WorkPage.class.getName());

    public WorkPage() {
        PageFactory.initElements(driver, this);
    }

//    @FindBy(xpath = "//a[@class='gem-c-button govuk-button govuk-button--start']")
//    WebElement startNowButton;
    @FindBy(xpath = "//select[@id='response']/option[45]")
    WebElement nationalityChile;
    @FindBy(xpath = "//button[contains(text(),'Continue')]")
    WebElement continueButton;
    @FindBy(xpath = "//input[@id='response-1']")
    WebElement WorkAcademicVisitOrBusiness;
//    @FindBy(xpath = "//button[contains(text(),'Continue')]")
//    WebElement ContinueButton;
    @FindBy(xpath = "//div[@class='gem-c-radio govuk-radios__item']//input[@id='response-1']")
    WebElement longerThan6Month;
    //    @FindBy(xpath = "//button[@class='gem-c-button govuk-button gem-c-button--bottom-margin']")
//    WebElement ContinueButton;
    @FindBy(xpath = "//div[@class='govuk-radios']/div/input")
    WebElement healthAndCareProfessional;
    //    @FindBy(xpath = )
//    WebElement Continue
    @FindBy(xpath = "//div[@class='govuk-!-margin-bottom-6']/h2")
    WebElement youNeedAVisaToWorkInHealthAndCare;
    @FindBy(xpath="//select[@id='response']/option[47]")
    WebElement nationalityColombia;
    @FindBy(xpath = "//input[@id='response-4']")
    WebElement joinPartnerOrFamilyForALongStay;
    @FindBy(xpath = "//h2[contains(text(),'You may need a visa')]")
    WebElement youMayNeedAVisaText;


//    public void clickOnStartNowButton() {
//        clickOnElement(startNowButton);
//        log.info("clicking on Start Now Button :" + startNowButton.toString());
//    }

    public void clickOnNationalityChile() {
       clickOnElement(nationalityChile);
    }

//    public void clickOnContinueButton() {
//        clickOnElement(continueButton);
//    }

    public void clickOnWorkAcademicVisitOrBusiness() {
        clickOnElement(WorkAcademicVisitOrBusiness);
    }

//    public void clickOncontinueButton() {
//        clickOnElement(ContinueButton);
//    }

    public void clickOnLongerThan6Month() {
        clickOnElement(longerThan6Month);

    }

    public void clickOnHealthAndCareProfessional() {
        clickOnElement(healthAndCareProfessional);
    }

    public String getYouWillNeedAVisaToComeToTheUkText() {
        return getTextFromElement(youNeedAVisaToWorkInHealthAndCare);
    }
    public void clickOnNationalityColombia() {
        clickOnElement(nationalityColombia);
    }
    public void cickOnJoinPartnerOrFamilyForAlongStay() {
        clickOnElement(joinPartnerOrFamilyForALongStay);
    }
    public String getYouMayNeedAVisa() {
        return getTextFromElement(youMayNeedAVisaText);
    }

}
