const welcomeScreenModule = require("../modules/welcome-screen-module");

suite("Welcome suite",  () => {
    test("Complete onboarding", async ()=> {
        await welcomeScreenModule.completeOnboarding();
    })
});
