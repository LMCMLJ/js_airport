function Plane() {
  this.flying = false;
}

Plane.prototype.isFlying = function() {
  return this.flying;
};

Plane.prototype.fly = function() {
  this.flying =true;
};
