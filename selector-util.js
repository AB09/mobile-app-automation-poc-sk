const packageID = 'com.shopkick.app';
class Selector {
    resourceID(id) {
        const selector =
            "android=new UiScrollable(new UiSelector().scrollable(true))" +
            `.scrollIntoView(new UiSelector().resourceId("${packageID}:id/${id}"))`;
            return selector;
    }
}

module.exports = new Selector();
