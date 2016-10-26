describe("Aiport", function() {
  // var airport;
  var plane;

  beforeEach(function() {
    // airport = new Airport();
    plane = new Plane();
    // console.log(airport.runway);
    // console.log("runningTwice");
  });


  describe("#land", function() {
    it("adds a plane to the hangar array", function() {
      console.log(airport);
      var airport = new Airport();
      airport.land(plane);
      expect(airport.runway).toContain(plane);
    });
  });

  describe("#takeoff", function() {
    it("sends a plane for takeoff", function() {
      // console.log(airport);
      console.log(airport.runway);
      airport.land(plane);
      airport.takeOff(plane);
      expect(airport.runway).not.toContain(plane);
    });
  });
});
