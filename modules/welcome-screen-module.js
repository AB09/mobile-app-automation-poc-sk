const selector = require('../selector-util');
const copies = require('../app-text-copies/en-text');
const assert = require("chai").assert;
const letsGoButton =  (selector.resourceID('go_button'));
const letsGoButtonText = (selector.resourceID('button_text'));
const welcomeScreenTitle = (selector.resourceID('title'));
const signInButton = (selector.resourceID('switch_button'));


class WelcomeScreenModule {

    async verifyOnboardingScreen() {
        const letGoBtnElem = await $(letsGoButton);
        const letGoBtnTextElem = await $(letsGoButtonText);
        const signInButtonElem = await $(signInButton);
        const welcomeScrTitleElem = await $(welcomeScreenTitle);

        await letGoBtnElem.waitForEnabled();
        const letsGoText = await letGoBtnTextElem.getText();
        const welcomeScrText = await welcomeScrTitleElem.getText();
        assert.equal(welcomeScrText,copies["welcome.screen.title"],"FAIL: Welcome Screen title does not match");
        assert.equal(letsGoText,copies["welcome.screen.lets.go"],"FAIL: Welcome Screen text does not match");
        assert.isTrue(await signInButtonElem.isDisplayed(),"FAIL: Sign in link is not displayed");
    }

    async openSignInForm() {
        const signInButtonElem = await $(signInButton);
        await signInButtonElem.click();
    }

    async showRewards() {
        const letGoBtnElem = await $(letsGoButton);
        await letGoBtnElem.waitForEnabled();
        await letGoBtnElem.click();
    }

}
module.exports = new WelcomeScreenModule();
