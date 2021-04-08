package stepdefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class Stepdefinition {
	public WebDriver driver;
	   
    @Given("^user should create an account$")
    public void user_should_create_an_account() throws Throwable {
        
        
        System.setProperty("webdriver.chrome.driver","C:\\automation\\chromedriver_win32\\chromedriver.exe");
        driver=new ChromeDriver();
        driver.manage().window().maximize();
        driver.get("https://www.lumens.com/");
              
                
       /* driver.findElement(By.xpath("//header/div[2]/div[4]/ul[1]/li[2]/div[1]")).click();
        driver.findElement(By.xpath("//a[@id='my_account_hdr_link']")).click();
        driver.findElement(By.xpath ("//input[@id='dwfrm_profile_customer_firstname']")).sendKeys("rohith");
        
        driver.findElement(By.xpath("//input[@id='dwfrm_profile_customer_lastname']")).sendKeys("dama");
        
        driver.findElement(By.xpath("//input[@id='dwfrm_profile_customer_email']")).sendKeys("rohithdama1993@gmail.com");
        
        driver.findElement(By.xpath("//input[@id='dwfrm_profile_customer_emailconfirm']")).sendKeys("rohithdama1993@gmail.com");
        
        driver.findElement(By.xpath("//input[@id='dwfrm_profile_login_password']")).sendKeys("rohith1606");
        driver.findElement(By.xpath("//input[@id='dwfrm_profile_login_passwordconfirm']")).sendKeys("rohith1606");
        
        driver.findElement(By.xpath("//span[contains(text(),'Create Account')]")).click();*/
        
    }

 

    @And("^login to application$")
    public void login_to_application() throws Throwable {  
         
                
          driver.findElement(By.xpath("//header/div[2]/div[4]/ul[1]/li[2]/div[1]")).click();
          driver.findElement(By.xpath("//a[@id='my_account_hdr_link']")).click();
          driver.findElement(By.xpath("//input[@id='dwfrm_login_username']")).sendKeys("rohithdama1993@gmail.com");
          
          driver.findElement(By.xpath("//input[@id='dwfrm_login_password']")).sendKeys("rohith1606");
          Thread.sleep(3000);
        
    }

 

    @Then("^click on submit button$")
    public void click_on_submit_button() throws Throwable {
        
          driver.findElement(By.xpath("//span[contains(text(),'Log In')]")).click();
                
        
    }

 

    @And("^user clicks on ligthing tab$")
    public void user_clicks_on_ligthing_tab() throws Throwable {
           
                
         WebElement ele= driver.findElement(By.xpath("//span[contains(text(),'lighting')]"));
         Actions act =new Actions(driver);
         act.moveToElement(ele).perform();
         driver.findElement(By.xpath("//*[@id=\"nav-tab-01\"]/ul/li/div[1]/span/a")).click();
        
    }

 

    @Then("^user select on Chandeliers$")
    public void user_select_on_Chandeliers() throws Throwable {
         
         driver.findElement(By.xpath("//span[contains(text(),'Chandeliers')]")).click();
        
    }

 

    @And("^user selects on LargeChandeliers$")
    
    public void user_selects_on_LargeChandeliers() throws Throwable {
        driver.findElement(By.xpath("//span[contains(text(),'Large Chandeliers')]")).click();
        
       
    }

 

    @Then("^user add filters and check filters$")
    public void user_add_filters_and_check_filters() throws Throwable {
        
        WebElement ele= driver.findElement(By.xpath("//a[@title='Click to Refine By 1 business day']//input[@type='checkbox']"));
        Actions act =new Actions(driver);
        act.moveToElement(ele).perform();
        Thread.sleep(5000);
      driver.findElement(By.xpath("//a[@title='Click to Refine By 1 business day']//input[@type='checkbox']")).click();
      
    }
    @And("^user will logout$")
    public void user_will_logout() throws Throwable {
         WebElement ele= driver.findElement(By.xpath("//header/div[2]/div[4]/ul[1]/li[2]/div[1]"));
            Actions act =new Actions(driver);
            act.moveToElement(ele).build().perform();
        
        driver.findElement(By.linkText("Sign Out")).click();
        
}

}
