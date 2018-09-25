describe("custom error", function() {
	it("returns the correct content", function() {
		expect(adminActions(buttons)).toEqual('<button>Admin Dashboard</button>');
	});
});