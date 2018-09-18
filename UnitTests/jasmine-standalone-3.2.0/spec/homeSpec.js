describe("A", function() {
	it("house can have improvements", function() {
		expect(Home.homeImprovement(choice1)).toBe(true);
		expect(choice1.type).toEqual('house');
	});
	it("apartment cannot have home improvements", function() {
		expect(Home.homeImprovement(choice2)).toBe(false);
		expect(choice2.type).toEqual('apartment');
	});
});