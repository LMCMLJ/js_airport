describe("Aiport", function() {
  var airport;

  beforeEach(function() {
    airport = new Airport();

  });

  describe("lands a plane", function() {
    it("when land is called", function() {

      expect(airport.runway).not.toBe([]);
    });
  });
});
