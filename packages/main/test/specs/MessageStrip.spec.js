const assert = require("assert");

describe("MessageStrip general interaction", () => {
	browser.url("http://localhost:8080/test-resources/sap/ui/webcomponents/main/pages/MessageStrip.html");

	it("tests close event", () => {

		const closeButton = browser.$("#messageStrip").shadow$(".ui5-messagestrip-close-icon-wrapper");
		const input = browser.$("#inputField");

		closeButton.click();
		closeButton.keys("Space");
		closeButton.keys("Enter");

		assert.strictEqual(input.getProperty("value"), "3", "Close should be called 3 times");
	});
});