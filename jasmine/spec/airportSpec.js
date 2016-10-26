describe("Aiport", function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });


  describe("#land", function() {
    it("adds a plane to the hangar array", function() {
      airport.land(plane);
      console.log(airport.runway);
      expect(airport.runway).toContain(plane);
    });
  });

  describe("#takeoff", function() {
    it("sends a plane for takeoff", function() {
      airport.land(plane);
      console.log(airport.runway)
      airport.takeOff(plane);
      expect(airport.runway).not.toContain(plane);
    });
  });
});
