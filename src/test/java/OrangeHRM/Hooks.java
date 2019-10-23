package OrangeHRM;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.concurrent.TimeUnit;

import static org.apache.commons.io.FileUtils.copyFile;

public class Hooks extends BasePage {


    BrowserSelector browserSelector = new BrowserSelector();
    LoadProps loadProp = new LoadProps();
    String timestamp = new SimpleDateFormat("yyyy_MM_dd__hh_mm_ss").format(new Date());




    @Before
    public void setUpBrowser() {
        browserSelector.setUpBrowser();
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.MILLISECONDS);
        driver.manage().window().maximize();
        //driver.get(loadProp.getProperty("url"));
    }

    @After
    public void closeBrowser (Scenario scenario) throws IOException {
        if (scenario.isFailed()){
            String screenshotName = scenario.getName().replaceAll("[.,:;?!]","") + timestamp + ".png";
            try {
                //This take a screenshot from the driver at save it to the specified location
                File sourcePath = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
                //Building up the destination path for the screenshot to save
                //Also make sure to create a folder 'screenshot'with in the cucumber-report folder
                File destinationPath = new File(System.getProperty("user.dir") + "/target/Destination/screenshots" + screenshotName );         // + timestamp+".png");
                //Copy taken screenshot from source location to destination location
                copyFile(sourcePath,destinationPath);
                scenario.write("!!!!!!!...scenario Failed....!!!!! Please see attached screenshot for the error/issue");
                //attach the screenshot to our report
                scenario.embed(((TakesScreenshot)driver).getScreenshotAs(OutputType.BYTES),"image/png");

                }catch (IOException e){

                }
        }

        driver.quit();

    }




}
