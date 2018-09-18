describe("conditional", function() {
  it("returns correctly", function() {
    if (ship == "hit") {
    	expect(battleShip()).toEqual("1 point");
    } else if (ship == "miss") {
    	expect(battleShip()).toEqual("You lost a point");
    } else {
    	throw new Error("nothing matches");
    }
  });
});