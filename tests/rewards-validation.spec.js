const welcomeScreenModule = require("../modules/welcome-screen-module");
const rewardsCardModule = require("../modules/rewards-module");
const signInFormModule = require("../modules/sign-in-form-module");


suite("Rewards validation",  () => {
    suiteSetup("Prerequisite : Complete on-boarding verification", async ()=>{
        await welcomeScreenModule.verifyOnboardingScreen();
        await welcomeScreenModule.showRewards();
    });
    test("Pick reward card and verify sign in screen", async ()=> {
        await rewardsCardModule.hasLoaded();
        await rewardsCardModule.verifyRewardsCopies();
        // await rewardsCardModule.openReward(); //TODO - Need to ask the developer to make the element clickable. Current it is under image view and not clickable
        //await signInFormModule.hasLoaded();
    })
});
