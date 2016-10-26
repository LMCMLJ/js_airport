function Airport() {
  this.runway = [];
}


Airport.prototype.land = function(plane) {
  this.runway.push(plane);
};

Airport.prototype.takeOff = function(plane) {
  this.runway.pop(plane);
};

var airport = new Airport();
