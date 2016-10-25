function Airport() {
  var runway = [];
}


Airport.prototype.land = function(plane) {
  runway.push('plane');
};

var airport = new Airport();
console.log(airport);
