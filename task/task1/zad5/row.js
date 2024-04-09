function Bicycle(type, gear, speed) {
    this.type = type;
    this.gear = gear;
    this.speed = 0;
    
}

Bicycle.prototype.changeGear = function(newGear) {
    this.gear = newGear
}

Bicycle.prototype.pedal = function() {
    this.speed += this.gear * 5;
}

Bicycle.prototype.brake = function() {
    this.speed = Math.max(0, this.speed - 5);

}

var myBicycle = new Bicycle("Mountain Bike", 3);

console.log(myBicycle.type)
console.log(myBicycle.gear)
console.log(myBicycle.speed)

myBicycle.changeGear(5);
console.log(myBicycle.gear);

myBicycle.pedal();
console.log(myBicycle.speed);


myBicycle.brake();
console.log(myBicycle.speed);

myBicycle.brake();
console.log(myBicycle.speed);

myBicycle.brake();
console.log(myBicycle.speed);

myBicycle.brake();
console.log(myBicycle.speed);
