describe("class", function() {
	it("has the right name", function() {
		expect(Account.name).toEqual("Account");
		expect(Object.getOwnPropertyNames(Account.prototype)).toEqual([ 'constructor', 'suckIt' ])
	})
	it("instantiates a new object correctly", function() {
		expect(user.username).toEqual(jasmine.any(String));
		expect(user.password).toEqual(jasmine.any(String));
	});
});