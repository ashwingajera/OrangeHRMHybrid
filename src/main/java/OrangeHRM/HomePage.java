package OrangeHRM;

import org.openqa.selenium.By;
import org.testng.Assert;


public class HomePage extends Utils {

    LoadProps loadProp = new LoadProps();

   private By _enterUsername =  By.id("txtUsername");
   private By _enterPassword = By.xpath("//input[@id=\"txtPassword\"]");
   private By get_enterPassword1 = By.xpath("//input[@name='txtPassword']");
   private By _clickOnContinue =  By.xpath("//input[@class=\"button\"]");
    private By _actual_ErrorMessage = By.xpath("//span[@id='spanMessage']");






    public void OnHomePage() {



        driver.get(loadProp.getProperty("url"));}


    public void homePageResultPage (){

        assertCurrentURL(loadProp.getProperty("url"));
       // System.out.println("User is on Homepage of Orange HRM");


    }

   public void userEnterValidCredential () {

        enterText(_enterUsername,loadProp.getProperty("validusername"));
        enterText(_enterPassword,loadProp.getProperty("validpassword"));



   }

   public void userenterInValidcredential (String username, String password){
        enterText(_enterUsername,username);
      // System.out.println("enter username: " + username);
        enterText(get_enterPassword1,password);
       //System.out.println("enter password: " +password);


    }

    public void clickOnLoginButton (){
        clickOnElement(_clickOnContinue);

    }

    public void errorMessage(String error_message)

    {
        String actual_ErrorMessage = getTextFromElement(_actual_ErrorMessage);

       Assert.assertEquals(error_message,actual_ErrorMessage);

       // System.out.println("error message display on screen: " + actual_ErrorMessage );

    }








}
