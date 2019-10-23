package OrangeHRM;


import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;




public class MystepDef extends Utils {

    HomePage homePage = new HomePage();
    DashBoard dashBoard = new DashBoard();



    @Given("^User is  on homepage$")
    public void user_is_on_homepage()  {
        homePage.OnHomePage();
        homePage.homePageResultPage();




    }

    @When("^User enter valid username and valid password$")
    public void user_enter_valid_username_and_valid_password()  {
        homePage.userEnterValidCredential();
        homePage.clickOnLoginButton();

    }


    @Then("^User should be navigated to dashboard page$")
    public void userShouldBeNavigatedToDashboardPage() {
        dashBoard.dashBoardPageResultPage();


    }

    @When("^User enter  \"([^\"]*)\" and  \"([^\"]*)\"$")
    public void user_enter_and(String username, String password) {
        homePage.userenterInValidcredential(username,password);
        homePage.clickOnLoginButton();


    }

    @Then("^User should able not able to login  and see \"([^\"]*)\"$")
    public void user_should_able_not_able_to_login_and_see(String error_message)  {
        homePage.errorMessage(error_message);


    }

}
