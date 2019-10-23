package OrangeHRM;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features ="src\\test\\Resouces\\Features", tags = "@login, @notLogin",plugin = {"pretty","html:target/cucumber-html-report"})

public class RunTest {
}
