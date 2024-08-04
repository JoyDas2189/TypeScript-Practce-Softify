//Without constructor..

class Car {
    name:string;
    brand:string;
}

const car:Car = new Car();
car.name = "Supra";
car.brand = "Toyota";

console.log(car);
console.log(car.name);
console.log(car["brand"]);

console.log();


//With constructor..
class Person {
    name: string;
    age: number;

    constructor(name:string, age:number) {
        this.name = name;
        this.age = age;
    }

    information() {
        return `Name : ${this.name}, Age : ${this.age}`;
    }
}

const person1:Person = new Person ("Joy", 23);

console.log(person1.name);
console.log(person1.age);
console.log(person1.information());





