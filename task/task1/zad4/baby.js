function Baby(name, age, favToy){
    this.favToy = favToy;
    this.name = name;
    this.age = age
}


Baby.prototype.play = function() {
    return this.name + " Play with " + this.favToy;
}

var baby1 = new Baby("Ali" , 3 ,"tren");

console.log(baby1.name)
console.log(baby1.age)
console.log(baby1.favToy)


console.log(baby1.play())