let test = new SocialMediaError("test");

describe("error class", function() {
	it("has the right name and constructor", function() {
		expect(Object.getOwnPropertyNames(SocialMediaError.prototype)).toEqual(["constructor"]);
	});
	it("has the right arguments", function() {
		expect(test.hasOwnProperty('msg')).toBe(true);
	});
});