//Without constructor..
var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());
var car = new Car();
car.name = "Supra";
car.brand = "Toyota";
console.log(car);
console.log(car.name);
console.log(car["brand"]);
console.log();
//With constructor..
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.information = function () {
        return "Name : ".concat(this.name, ", Age : ").concat(this.age);
    };
    return Person;
}());
var person1 = new Person("Joy", 23);
console.log(person1.name);
console.log(person1.age);
console.log(person1.information());
