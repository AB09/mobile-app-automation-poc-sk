const assert = require('chai').assert;
const selector = require('../selector-util');
const copies = require('../app-text-copies/en-text');
const rewardsScrTitle = selector.resourceID('title_text');
const rewardsScrDesc = selector.resourceID('subtitle_text');
const rewardCardImage = selector.resourceID('gift_card_image'); // this will be an array of element

class RewardsModule {
    async hasLoaded() {
        const rewardCardImgElem = await $(rewardCardImage);
        assert.isTrue(await rewardCardImgElem.isDisplayed(), "FAIL: Reward screen is not loaded");
    }

    async verifyRewardsCopies() {
        const rewardsScrTitleElem = await $(rewardsScrTitle);
        const rewardsScrDescElem = await $(rewardsScrDesc);
        assert.equal(this.getFormattedString(await rewardsScrTitleElem.getText()),copies["reward.screen.title"],"FAIL: Reward screen title does not match");
        assert.equal(await rewardsScrDescElem.getText(),copies["reward.screen.desc"],"FAIL: Reward screen description does not match");
    }

    async openReward() {
        const rewardCardImgElem = await $(rewardCardImage);
        await rewardCardImgElem.waitForClickable();
        await rewardCardImgElem.click();
    }

    getFormattedString(str) {
        return str.replace(/\n/g," ").trim();
    }
}
module.exports = new RewardsModule();
