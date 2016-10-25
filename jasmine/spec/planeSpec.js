describe("Plane", function() {
  beforeEach( function() {
    var plane = new Plane();
  });

  describe("#isFlying", function() {
    it("is flying when flying is true", function() {
      expect(plane.flying).toBe(true);
    });
  });
});
