xdescribe("dom manipulation", function() {
	it("removes a class and adds the right one", function() {
		expect(heading.className).toEqual('disabled');
	});
});

//This won't currently work because the spec and/or the src is running before the html has even loaded