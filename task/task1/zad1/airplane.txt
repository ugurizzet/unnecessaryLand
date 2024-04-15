function Airplane(name) {
    this.name = name;
    this.isFlying = false;

};


Airplane.prototype.takeOff = function() {
    this.isFlying = true;
    console.log(this.name + " has taken off.");
};

Airplane.prototype.land = function() {
    this.isFlying = false;
    console.log(this.name + " has landed.")
};

var myAirplane = new Airplane("Boeing 747");
console.log(myAirplane.name)
console.log(myAirplane.isFlying)
myAirplane.takeOff()
console.log(myAirplane.isFlying)
myAirplane.land()
console.log(myAirplane.isFlying)