describe("Aiport", function() {

  beforeEach(function() {
    var airport = new Airport();

  });

  describe("lands a plane", function() {
    it("when land is called", function() {

      expect(airport.runway).not.toBe([]);
    });
  });
});
