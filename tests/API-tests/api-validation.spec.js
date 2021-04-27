const serviceHelper = require('../../service-helper');
const assert = require("chai").assert;
const baseRequestUrl = (endPoint='/all') => {
    return `https://restcountries.eu/rest/v2${endPoint}`;
};

const capitalCities = ["Ottawa", "Delhi", "Brasilia"];
const countries = {
    Ottawa: "Canada",
    Delhi: "India",
    Brasilia: "Brazil"
};


suite("API Validation",  () => {
    test("Verify Countries endpoint is up and running", async ()=> {
        const response = await serviceHelper.getRequest(baseRequestUrl());
        const data = await response.data;
        const status = await response.status;
        await assert.equal(status,200,"FAIL: Status code is not 200");
        await assert.isNotNull(data,"FAIL: Response object is null");
    });

    capitalCities.forEach(city => {
        test(`Verify Search by capital city endpoint is returning right country name for : ${city}`, async ()=> {
            const response = await serviceHelper.getRequest(baseRequestUrl(`/capital/${city}`));
            const data = await response.data;
            const status = await response.status;
            await assert.equal(status,200,"FAIL: Status code is not 200");
            await assert.equal(data[0].name,countries[city], "FAIL: Country capital is incorrect");
        });
    });

    test("Verify currency symbol based on currency code", async ()=> {
        const response = await serviceHelper.getRequest(baseRequestUrl(`/currency/cad`));
        const data = await response.data;
        const status = await response.status;
        await assert.equal(status,200,"FAIL: Status code is not 200");
        await assert.equal(data[0].currencies[0].symbol,"$" ,"FAIL: Currency symbol is not correct");
    });

});
