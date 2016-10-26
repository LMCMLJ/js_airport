

function Airport() {
  this.runway = [];
  console.log(this.runway);

}

Airport.prototype.land = function(plane) {
  this.runway.push(plane);
  // console.log(plane);
};

Airport.prototype.takeOff = function(plane) {
  this.runway.pop(plane);
};

var airport = new Airport();
