describe("Plane", function() {
  var plane;

  describe("#isFlying", function() {

    beforeEach( function() {
      plane = new Plane();
      // console.log(plane.flying);
    });

    it("is flying when flying is true", function() {

      // console.log(plane.flying);

      expect(plane.flying).toBe(false);
    });
  });
});
