$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("orangeHRMLogin.feature");
formatter.feature({
  "line": 1,
  "name": "To verify user can login with valid credentials successfully and see",
  "description": "",
  "id": "to-verify-user-can-login-with-valid-credentials-successfully-and-see",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4911081182,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is  on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "MystepDef.user_is_on_homepage()"
});
formatter.result({
  "duration": 1771178275,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "User should able to login successfully with valid username and valid password and see success message",
  "description": "",
  "id": "to-verify-user-can-login-with-valid-credentials-successfully-and-see;user-should-able-to-login-successfully-with-valid-username-and-valid-password-and-see-success-message",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User enter valid username and valid password",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User should be navigated to dashboard page",
  "keyword": "Then "
});
formatter.match({
  "location": "MystepDef.user_enter_valid_username_and_valid_password()"
});
formatter.result({
  "duration": 2144306673,
  "status": "passed"
});
formatter.match({
  "location": "MystepDef.userShouldBeNavigatedToDashboardPage()"
});
formatter.result({
  "duration": 7641684,
  "status": "passed"
});
formatter.after({
  "duration": 624581338,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "User should not able to login with invalid credentials and see error message",
  "description": "",
  "id": "to-verify-user-can-login-with-valid-credentials-successfully-and-see;user-should-not-able-to-login-with-invalid-credentials-and-see-error-message",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@notLogin"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "User enter  \"\u003cusername\u003e\" and  \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User should able not able to login  and see \"\u003cerror message\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "to-verify-user-can-login-with-valid-credentials-successfully-and-see;user-should-not-able-to-login-with-invalid-credentials-and-see-error-message;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "error message"
      ],
      "line": 20,
      "id": "to-verify-user-can-login-with-valid-credentials-successfully-and-see;user-should-not-able-to-login-with-invalid-credentials-and-see-error-message;;1"
    },
    {
      "cells": [
        "Admin",
        "admin321",
        "Invalid credentials"
      ],
      "line": 21,
      "id": "to-verify-user-can-login-with-valid-credentials-successfully-and-see;user-should-not-able-to-login-with-invalid-credentials-and-see-error-message;;2"
    },
    {
      "cells": [
        "adnim",
        "admin123",
        "Invalid credentials"
      ],
      "line": 22,
      "id": "to-verify-user-can-login-with-valid-credentials-successfully-and-see;user-should-not-able-to-login-with-invalid-credentials-and-see-error-message;;3"
    },
    {
      "cells": [
        "adnim",
        "admin321",
        "Invalid credentials"
      ],
      "line": 23,
      "id": "to-verify-user-can-login-with-valid-credentials-successfully-and-see;user-should-not-able-to-login-with-invalid-credentials-and-see-error-message;;4"
    },
    {
      "cells": [
        "Admin",
        "",
        "Password cannot be empty"
      ],
      "line": 24,
      "id": "to-verify-user-can-login-with-valid-credentials-successfully-and-see;user-should-not-able-to-login-with-invalid-credentials-and-see-error-message;;5"
    },
    {
      "cells": [
        "",
        "admin123",
        "Username cannot be empty"
      ],
      "line": 25,
      "id": "to-verify-user-can-login-with-valid-credentials-successfully-and-see;user-should-not-able-to-login-with-invalid-credentials-and-see-error-message;;6"
    },
    {
      "cells": [
        "",
        "",
        "Username cannot be empty"
      ],
      "line": 26,
      "id": "to-verify-user-can-login-with-valid-credentials-successfully-and-see;user-should-not-able-to-login-with-invalid-credentials-and-see-error-message;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3826443730,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is  on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "MystepDef.user_is_on_homepage()"
});
formatter.result({
  "duration": 1562642761,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "User should not able to login with invalid credentials and see error message",
  "description": "",
  "id": "to-verify-user-can-login-with-valid-credentials-successfully-and-see;user-should-not-able-to-login-with-invalid-credentials-and-see-error-message;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@notLogin"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "User enter  \"Admin\" and  \"admin321\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User should able not able to login  and see \"Invalid credentials\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 13
    },
    {
      "val": "admin321",
      "offset": 26
    }
  ],
  "location": "MystepDef.user_enter_and(String,String)"
});
formatter.result({
  "duration": 1023371319,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid credentials",
      "offset": 45
    }
  ],
  "location": "MystepDef.user_should_able_not_able_to_login_and_see(String)"
});
formatter.result({
  "duration": 49626659,
  "error_message": "java.lang.AssertionError: expected [Ungültige Benutzernamen-Passwort-Kombination] but found [Invalid credentials]\r\n\tat org.testng.Assert.fail(Assert.java:97)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:136)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:575)\r\n\tat org.testng.Assert.assertEquals(Assert.java:585)\r\n\tat OrangeHRM.Utils.assertTextMessage(Utils.java:163)\r\n\tat OrangeHRM.HomePage.errorMessage(HomePage.java:65)\r\n\tat OrangeHRM.MystepDef.user_should_able_not_able_to_login_and_see(MystepDef.java:53)\r\n\tat ✽.Then User should able not able to login  and see \"Invalid credentials\"(orangeHRMLogin.feature:18)\r\n",
  "status": "failed"
});
formatter.write("!!!!!!!...scenario Failed....!!!!! Please see attached screenshot for the error/issue");
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1279396800,
  "status": "passed"
});
formatter.before({
  "duration": 3725020650,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is  on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "MystepDef.user_is_on_homepage()"
});
formatter.result({
  "duration": 1805910815,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "User should not able to login with invalid credentials and see error message",
  "description": "",
  "id": "to-verify-user-can-login-with-valid-credentials-successfully-and-see;user-should-not-able-to-login-with-invalid-credentials-and-see-error-message;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@notLogin"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "User enter  \"adnim\" and  \"admin123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User should able not able to login  and see \"Invalid credentials\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "adnim",
      "offset": 13
    },
    {
      "val": "admin123",
      "offset": 26
    }
  ],
  "location": "MystepDef.user_enter_and(String,String)"
});
formatter.result({
  "duration": 713521063,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid credentials",
      "offset": 45
    }
  ],
  "location": "MystepDef.user_should_able_not_able_to_login_and_see(String)"
});
formatter.result({
  "duration": 49955088,
  "error_message": "java.lang.AssertionError: expected [Ungültige Benutzernamen-Passwort-Kombination] but found [Invalid credentials]\r\n\tat org.testng.Assert.fail(Assert.java:97)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:136)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:575)\r\n\tat org.testng.Assert.assertEquals(Assert.java:585)\r\n\tat OrangeHRM.Utils.assertTextMessage(Utils.java:163)\r\n\tat OrangeHRM.HomePage.errorMessage(HomePage.java:65)\r\n\tat OrangeHRM.MystepDef.user_should_able_not_able_to_login_and_see(MystepDef.java:53)\r\n\tat ✽.Then User should able not able to login  and see \"Invalid credentials\"(orangeHRMLogin.feature:18)\r\n",
  "status": "failed"
});
formatter.write("!!!!!!!...scenario Failed....!!!!! Please see attached screenshot for the error/issue");
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 1203128213,
  "status": "passed"
});
formatter.before({
  "duration": 3778452756,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is  on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "MystepDef.user_is_on_homepage()"
});
formatter.result({
  "duration": 3679836151,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "User should not able to login with invalid credentials and see error message",
  "description": "",
  "id": "to-verify-user-can-login-with-valid-credentials-successfully-and-see;user-should-not-able-to-login-with-invalid-credentials-and-see-error-message;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@notLogin"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "User enter  \"adnim\" and  \"admin321\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User should able not able to login  and see \"Invalid credentials\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "adnim",
      "offset": 13
    },
    {
      "val": "admin321",
      "offset": 26
    }
  ],
  "location": "MystepDef.user_enter_and(String,String)"
});
formatter.result({
  "duration": 785139942,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid credentials",
      "offset": 45
    }
  ],
  "location": "MystepDef.user_should_able_not_able_to_login_and_see(String)"
});
formatter.result({
  "duration": 46620998,
  "error_message": "java.lang.AssertionError: expected [Ungültige Benutzernamen-Passwort-Kombination] but found [Invalid credentials]\r\n\tat org.testng.Assert.fail(Assert.java:97)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:136)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:575)\r\n\tat org.testng.Assert.assertEquals(Assert.java:585)\r\n\tat OrangeHRM.Utils.assertTextMessage(Utils.java:163)\r\n\tat OrangeHRM.HomePage.errorMessage(HomePage.java:65)\r\n\tat OrangeHRM.MystepDef.user_should_able_not_able_to_login_and_see(MystepDef.java:53)\r\n\tat ✽.Then User should able not able to login  and see \"Invalid credentials\"(orangeHRMLogin.feature:18)\r\n",
  "status": "failed"
});
formatter.write("!!!!!!!...scenario Failed....!!!!! Please see attached screenshot for the error/issue");
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 1253322021,
  "status": "passed"
});
formatter.before({
  "duration": 3686581115,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is  on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "MystepDef.user_is_on_homepage()"
});
formatter.result({
  "duration": 1722347601,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "User should not able to login with invalid credentials and see error message",
  "description": "",
  "id": "to-verify-user-can-login-with-valid-credentials-successfully-and-see;user-should-not-able-to-login-with-invalid-credentials-and-see-error-message;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@notLogin"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "User enter  \"Admin\" and  \"\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User should able not able to login  and see \"Password cannot be empty\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 13
    },
    {
      "val": "",
      "offset": 26
    }
  ],
  "location": "MystepDef.user_enter_and(String,String)"
});
formatter.result({
  "duration": 294712478,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password cannot be empty",
      "offset": 45
    }
  ],
  "location": "MystepDef.user_should_able_not_able_to_login_and_see(String)"
});
formatter.result({
  "duration": 62317183,
  "error_message": "java.lang.AssertionError: expected [Das Passwort darf nicht leer sein] but found [Password cannot be empty]\r\n\tat org.testng.Assert.fail(Assert.java:97)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:136)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:575)\r\n\tat org.testng.Assert.assertEquals(Assert.java:585)\r\n\tat OrangeHRM.Utils.assertTextMessage(Utils.java:163)\r\n\tat OrangeHRM.HomePage.errorMessage(HomePage.java:65)\r\n\tat OrangeHRM.MystepDef.user_should_able_not_able_to_login_and_see(MystepDef.java:53)\r\n\tat ✽.Then User should able not able to login  and see \"Password cannot be empty\"(orangeHRMLogin.feature:18)\r\n",
  "status": "failed"
});
formatter.write("!!!!!!!...scenario Failed....!!!!! Please see attached screenshot for the error/issue");
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "duration": 1241865007,
  "status": "passed"
});
formatter.before({
  "duration": 4184015452,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is  on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "MystepDef.user_is_on_homepage()"
});
formatter.result({
  "duration": 1997599120,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "User should not able to login with invalid credentials and see error message",
  "description": "",
  "id": "to-verify-user-can-login-with-valid-credentials-successfully-and-see;user-should-not-able-to-login-with-invalid-credentials-and-see-error-message;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@notLogin"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "User enter  \"\" and  \"admin123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User should able not able to login  and see \"Username cannot be empty\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 13
    },
    {
      "val": "admin123",
      "offset": 21
    }
  ],
  "location": "MystepDef.user_enter_and(String,String)"
});
formatter.result({
  "duration": 167113125,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Username cannot be empty",
      "offset": 45
    }
  ],
  "location": "MystepDef.user_should_able_not_able_to_login_and_see(String)"
});
formatter.result({
  "duration": 49417209,
  "error_message": "java.lang.AssertionError: expected [Der Benutzername darf nicht leer sein] but found [Username cannot be empty]\r\n\tat org.testng.Assert.fail(Assert.java:97)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:136)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:575)\r\n\tat org.testng.Assert.assertEquals(Assert.java:585)\r\n\tat OrangeHRM.Utils.assertTextMessage(Utils.java:163)\r\n\tat OrangeHRM.HomePage.errorMessage(HomePage.java:65)\r\n\tat OrangeHRM.MystepDef.user_should_able_not_able_to_login_and_see(MystepDef.java:53)\r\n\tat ✽.Then User should able not able to login  and see \"Username cannot be empty\"(orangeHRMLogin.feature:18)\r\n",
  "status": "failed"
});
formatter.write("!!!!!!!...scenario Failed....!!!!! Please see attached screenshot for the error/issue");
formatter.embedding("image/png", "embedded4.png");
formatter.after({
  "duration": 1358292061,
  "status": "passed"
});
formatter.before({
  "duration": 3787291458,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is  on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "MystepDef.user_is_on_homepage()"
});
formatter.result({
  "duration": 1841445803,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "User should not able to login with invalid credentials and see error message",
  "description": "",
  "id": "to-verify-user-can-login-with-valid-credentials-successfully-and-see;user-should-not-able-to-login-with-invalid-credentials-and-see-error-message;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@notLogin"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "User enter  \"\" and  \"\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User should able not able to login  and see \"Username cannot be empty\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 13
    },
    {
      "val": "",
      "offset": 21
    }
  ],
  "location": "MystepDef.user_enter_and(String,String)"
});
formatter.result({
  "duration": 272890174,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Username cannot be empty",
      "offset": 45
    }
  ],
  "location": "MystepDef.user_should_able_not_able_to_login_and_see(String)"
});
formatter.result({
  "duration": 68399207,
  "error_message": "java.lang.AssertionError: expected [Der Benutzername darf nicht leer sein] but found [Username cannot be empty]\r\n\tat org.testng.Assert.fail(Assert.java:97)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:136)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:575)\r\n\tat org.testng.Assert.assertEquals(Assert.java:585)\r\n\tat OrangeHRM.Utils.assertTextMessage(Utils.java:163)\r\n\tat OrangeHRM.HomePage.errorMessage(HomePage.java:65)\r\n\tat OrangeHRM.MystepDef.user_should_able_not_able_to_login_and_see(MystepDef.java:53)\r\n\tat ✽.Then User should able not able to login  and see \"Username cannot be empty\"(orangeHRMLogin.feature:18)\r\n",
  "status": "failed"
});
formatter.write("!!!!!!!...scenario Failed....!!!!! Please see attached screenshot for the error/issue");
formatter.embedding("image/png", "embedded5.png");
formatter.after({
  "duration": 1168879574,
  "status": "passed"
});
});