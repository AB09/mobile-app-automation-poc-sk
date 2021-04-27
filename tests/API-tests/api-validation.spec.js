const serviceHelper = require('../../service-helper');
const baseRequestUrl = "https://restcountries.eu/rest/v2/all";
const assert = require("chai").assert;
let data;
let status;
suite("API Validation",  () => {
    suiteSetup("Setup API response for tests", async () => {
        const response = await serviceHelper.getRequest(baseRequestUrl);
        data = await response.data;
        status = await response.status;
    });
    test("Verify Countries endpoint is up and running", async ()=> {
        await assert.equal(status,200,"FAIL: Status code is not 200");
        await assert.isNotNull(data,"FAIL: Response object is null");
    })
});
