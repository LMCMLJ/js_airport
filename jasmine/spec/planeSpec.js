describe("Plane", function() {
  var plane;

  describe("#isFlying", function() {

    beforeEach( function() {
      plane = new Plane();
    });

    it("is flying when flying is true", function() {
      plane.fly
      console.log(plane)
      expect(plane.flying).toBe(true);
    });
  });
});
