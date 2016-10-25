function Plane() {
    this.flying = false;
  //console.log(flying)
};

// Plane.prototype.isFlying = function() {
//   return this.flying;
// };

Plane.prototype.fly = function() {
  this.flying =true;
};
