function Airport() {
  var runway = ["plane"];
};

//Airport.prototype.createRunway = function() {};

Airport.prototype.land = function(plane) {
  runway.push(plane);
};

var airport = new Airport();
console.log(runway);
