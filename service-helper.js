const axios = require("axios");
const request = async (
    method,
    url
) => {
    try {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };
        const response = await axios({
            method:method,
            url:url,
            headers:headers,
            proxy: false //Adding this to bypass proxy
        });
        return await response;
    } catch (error) {
        console.log(`ERROR: ${error}`);
    }
};

class ServiceHelper {
    async getRequest(url) {
        return request("get", url);
    }
}
module.exports = new ServiceHelper();
