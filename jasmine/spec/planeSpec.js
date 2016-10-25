describe("Plane", function() {
  var plane;

  describe("#isFlying", function() {

    beforeEach( function() {
      plane = new Plane();
      console.log(plane.flying)
    });

    it("is flying when flying is true", function() {
      // console.log(plane)
      // console.log(plane.fly)

      console.log(plane.flying)
      // plane.fly();

      expect(plane.flying).toBe(false);
    });
  });
});
