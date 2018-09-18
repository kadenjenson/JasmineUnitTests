describe("destructuring", function() {
	it("assigns Obi-Wan correctly", function() {
		expect(JediKnight.toLowerCase()).toEqual("obi-wan kenobi");
	});
	it("assigns Anakin correctly", function() {
		expect(Padawan.toLowerCase()).toEqual("anakin skywalker");
	});
	it("assigns Dooku correctly", function() {
		expect(SithLord.toLowerCase()).toEqual("count dooku");
	});
});