function Plane() {
  var flying = true;
}

Plane.prototype.isFlying = function() {
  return this.flying;
};
