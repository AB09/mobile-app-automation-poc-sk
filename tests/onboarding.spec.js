const welcomeScreenModule = require("../modules/welcome-screen-module");
const signInFormModule = require("../modules/sign-in-form-module");

suite("Welcome suite",  () => {
    test("Verify On-boarding screen", async ()=> {
        await welcomeScreenModule.verifyOnboardingScreen();
        await welcomeScreenModule.openSignInForm();
        await signInFormModule.hasLoaded();
    })
});
