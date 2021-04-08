$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Website",
  "description": "",
  "id": "login-website",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "",
  "description": "",
  "id": "login-website;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "user should create an account",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "login to application",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "click on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user clicks on ligthing tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user select on Chandeliers",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user selects on LargeChandeliers",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user add filters and check filters",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user will logout",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinition.user_should_create_an_account()"
});
formatter.result({
  "duration": 31320025300,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.login_to_application()"
});
formatter.result({
  "duration": 1261155600,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cdiv class\u003d\"btn-group dropdown-group\"\u003e...\u003c/div\u003e is not clickable at point (1152, 125). Other element would receive the click: \u003cdiv id\u003d\"ltkpopup-overlay\" class\u003d\"simpleltkmodal-overlay\" style\u003d\"background-color: rgb(0, 0, 0); opacity: 0.5; height: 10900px; width: 1349px; position: fixed; left: 0px; top: 0px; z-index: 1001;\"\u003e\u003c/div\u003e\n  (Session info: chrome\u003d89.0.4389.114)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027DESKTOP-8CUL0V2\u0027, ip: \u0027192.168.0.112\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 89.0.4389.114, chrome: {chromedriverVersion: 89.0.4389.23 (61b08ee2c5002..., userDataDir: C:\\Users\\win10\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:57101}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 7f15f982ce2bd3f7456614dd51fb7864\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat stepdefinition.Stepdefinition.login_to_application(Stepdefinition.java:49)\r\n\tat ✽.And login to application(login.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Stepdefinition.click_on_submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefinition.user_clicks_on_ligthing_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefinition.user_select_on_Chandeliers()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefinition.user_selects_on_LargeChandeliers()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefinition.user_add_filters_and_check_filters()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefinition.user_will_logout()"
});
formatter.result({
  "status": "skipped"
});
});