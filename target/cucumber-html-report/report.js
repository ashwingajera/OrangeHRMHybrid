$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("orangeHRMLogin.feature");
formatter.feature({
  "line": 1,
  "name": "To verify user can login with valid credentials successfully and see",
  "description": "",
  "id": "to-verify-user-can-login-with-valid-credentials-successfully-and-see",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6788189217,
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
  "duration": 1615857822,
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
  "duration": 1705401754,
  "status": "passed"
});
formatter.match({
  "location": "MystepDef.userShouldBeNavigatedToDashboardPage()"
});
formatter.result({
  "duration": 6354289,
  "status": "passed"
});
formatter.after({
  "duration": 3622569815,
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
  "duration": 5600803828,
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
  "duration": 1515449712,
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
  "duration": 816314056,
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
  "duration": 19987729,
  "status": "passed"
});
formatter.after({
  "duration": 2470087400,
  "status": "passed"
});
formatter.before({
  "duration": 5016704528,
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
  "duration": 1437421123,
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
  "duration": 406574918,
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
  "duration": 35966965,
  "status": "passed"
});
formatter.after({
  "duration": 3569958763,
  "status": "passed"
});
formatter.before({
  "duration": 4540959241,
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
  "duration": 2202887940,
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
  "duration": 427904134,
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
  "duration": 26067563,
  "status": "passed"
});
formatter.after({
  "duration": 3031379530,
  "status": "passed"
});
formatter.before({
  "duration": 4989700319,
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
  "duration": 1944992215,
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
  "duration": 284560096,
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
  "duration": 35881816,
  "status": "passed"
});
formatter.after({
  "duration": 2891611396,
  "status": "passed"
});
formatter.before({
  "duration": 4577596378,
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
  "duration": 1777264980,
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
  "duration": 289152852,
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
  "duration": 44187703,
  "status": "passed"
});
formatter.after({
  "duration": 2908510931,
  "status": "passed"
});
formatter.before({
  "duration": 5039802498,
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
  "duration": 2036811618,
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
  "duration": 264540056,
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
  "duration": 36769804,
  "status": "passed"
});
formatter.after({
  "duration": 2600266321,
  "status": "passed"
});
});