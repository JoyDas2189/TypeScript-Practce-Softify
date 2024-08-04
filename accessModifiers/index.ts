class Employee {
    public name: string;
    protected department: string;
    private salary: number;

    constructor(name: string, department: string, salary: number) {
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    getDetails() {
        return `Name: ${this.name}, Department: ${this.department}, Salary : ${this.salary}`;
    }
}

class Manager extends Employee {
    constructor(name: string, department: string, salary: number) {
        super(name, department, salary);
    }

    getManagerDetails() {
        return `Manager: ${this.name}, Department: ${this.department}`;
    }
}

let emp = new Employee("Alice", "HR", 5000);
console.log(emp.getDetails());

let manager = new Manager("Bob", "IT", 10000);
console.log(manager.getManagerDetails());
