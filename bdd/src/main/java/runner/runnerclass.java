package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
        features="src/main/java/feature",
                glue={"stepdefinition"},
                
                         plugin = { "pretty","html:test-output","json:json_output/cucumber.json","junit:junit_xml/cucumber.xml"},
                		//plugin = {"com.cucumber.listener.ExtentCucumberFormatter:BDDControlCenterTools/target/Reports/cucumber-report.html"},
                        // plugin = { "pretty","com.cucumber.listener.ExtentCucumberFormatter:target/cucumber-reports/report.html","html:test-output","json:json_output/cucumber.json","junit:junit_xml/cucumber.xml"},
                monochrome=true,
                    dryRun=false
                    )
public class runnerclass {

}
