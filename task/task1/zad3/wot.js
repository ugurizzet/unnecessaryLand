function Car(model, milesPerGallon) {
    this.model = model;
    this.milesPerGallon = milesPerGallon;
    this.tank = 0;
    this.odometer = 0;
}

Car.prototype.fill = function(gallons) {
    this.tank += gallons;

}

Car.prototype.drive = function(distance) {
    const maxDistance = this.tank * this.milesPerGallon;
    if (distance <= maxDistance) {
        this.odometer += distance;
        this.tank -= distance / this.milesPerGallon;
    } else {
        this.odometer += maxDistance;
        this.tank =0;
        return  "I drove " + this.model + ",I ran out of fuel at " + this.odometer + " milse!"
    }
}

var myCar = new Car("Nissan",25);

myCar.fill(15);
console.log(myCar.tank)

myCar.drive(200);
console.log(myCar.odometer)
console.log(myCar.tank)

var mass = myCar.drive(300);
console.log(mass);
console.log(myCar.odometer)
console.log(myCar.tank)