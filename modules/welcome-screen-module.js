const selector = require('../selector-util');

const letsGoButton =  (selector.resourceID('go_button'));
const letsGoButtonText = (selector.resourceID('button_text'));


class WelcomeScreenModule {

    async completeOnboarding() {
        const letGoBtnElem = await $(letsGoButton);
        const letGoBtnTextElem = await $(letsGoButtonText);
        await letGoBtnElem.waitForEnabled();
        const text = await letGoBtnTextElem.getText();
        console.log(text);
        await letGoBtnElem.click();
    }

}
module.exports = new WelcomeScreenModule();
