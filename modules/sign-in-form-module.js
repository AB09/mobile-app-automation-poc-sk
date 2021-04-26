const selector = require('../selector-util');
const copies = require('../app-text-copies/en-text');
const assert = require("chai").assert;
const emailInput =  (selector.resourceID('email_edit_text'));
const passwordInput = (selector.resourceID('password_edit_text'));
const nextButton = (selector.resourceID('next_button'));
const signInScreenTitle = (selector.resourceID("title"));

class SignInFormModule {

    async hasLoaded() {
        const emailInputElem = await $(emailInput);
        assert.isTrue(await emailInputElem.isDisplayed(),"FAIL: We are not on sign in form")
    }

}
module.exports = new SignInFormModule();
