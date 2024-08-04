/*
interface Person {
    name : string;
}
interface Person {
    age : number;
}

const person: Person = {name:"Joy", age:23};
console.log(person);
 */
var Student = /** @class */ (function () {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastname = lastName;
    }
    Student.prototype.getFullName = function () {
        return "Full Name : ".concat(this.firstName, " ").concat(this.lastname);
    };
    return Student;
}());
var student = new Student("Joy", "Das");
console.log(student);
console.log(student.getFullName());
