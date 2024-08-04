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

/* 
interface Person {
    name: string;
    age: number;
}

interface Teacher extends Person{
    qualification: string;
    duration:number;
}

let teacher1:Teacher = {name:"Kamrul", age:54, qualification: "MSc", duration:5};

console.log(teacher1);
 */
/* 
interface Person {
    name:string;
    age:number;
}
interface Teacher {
    qualification: string;
    duration: number;
}

interface HeadTeacher extends Person, Teacher {
    role: string;
}

const teacher:HeadTeacher = {name: "Rahim", age: 56, qualification: "MSc", duration: 10, role:"Head Teacer"};

console.log(teacher);
 */


//interface in class...

interface Person {
    firstName :string;
    lastname:string;
    getFullName():string
}

class Student implements Person {
    firstName: string;
    lastname: string;
    getFullName(): string {
        return `Full Name : ${this.firstName} ${this.lastname}`;
    }
    constructor (firstName:string, lastName:string) {
        this.firstName = firstName;
        this.lastname = lastName;
    }
}

const student:Student = new Student ("Joy", "Das");
console.log(student);
console.log(student.getFullName());

