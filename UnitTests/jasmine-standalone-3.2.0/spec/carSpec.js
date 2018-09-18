describe("instance", function() {
	it("still has the starter code", function() {
		expect(Object.getOwnPropertyNames(Car.prototype)).toEqual([ 'constructor', 'carSpecs' ])
	})
	it("of Car class is a Tesla", function() {
		expect(model3.year).toEqual(2018);
		expect(model3.brand).toEqual('Tesla');
		expect(model3.poweredBy).toEqual('electricity');
	});
});