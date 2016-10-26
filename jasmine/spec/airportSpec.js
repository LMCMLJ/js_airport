describe("Aiport", function() {
  var airport;
  var plane;

  beforeEach(function() {
    var airport = new Airport();
    var plane = new Plane();

  });

  spyOn(plane, "isFlying").and.returnValue(true);
  describe("#land", function() {
    it("lands a plane", function() {
      expect(plane.isFlying).toBe(true);
      expect(airport.runway).not.toBe([]);
    });
  });
  describe("#takeoff", function() {
    it("sends a plane for takeoff", function(){

      expect(airport.runway).toBe([]);

    });
  });
});
