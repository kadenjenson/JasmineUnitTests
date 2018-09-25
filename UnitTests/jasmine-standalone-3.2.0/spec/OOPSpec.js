describe("class", function() {
	it("has the right name", function() {
		expect(Account.name).toEqual("Account");
		expect(Object.getOwnPropertyNames(Account.prototype)).toEqual([ 'constructor', 'suckIt' ])
	})
	it("instantiates a new object correctly", function() {
		expect(admin.username).toEqual(jasmine.any(String));
		expect(admin.password).toEqual(jasmine.any(String));
	});
});