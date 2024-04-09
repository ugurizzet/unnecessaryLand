function Person(name, age) {
    this.name = name;
    this.age = age;
    this.stomach = [];
}

Person.prototype.eat = function(someFood) {
    if (this.stomach.length < 10) {
        this.stomach.push(someFood);
        console.log(this.name + " ate " + someFood);
    } else {
        console.log(this.name + "'s stomach is full.");
    }
};

Person.prototype.poop = function() {
    this.stomach = [];
    console.log(this.name + " has emptied their stomach.");
};

Person.prototype.toString = function() {
    return this.name + ", " + this.age
}

var person1 = new Person("Giga Men", "31");

console.log(person1.toString())
person1.eat('apple');
person1.eat('egg');
// person1.poop();

console.log(person1.stomach)