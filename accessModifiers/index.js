var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(name, department, salary) {
        this.name = name;
        this.department = department;
        this.salary = salary;
    }
    Employee.prototype.getDetails = function () {
        return "Name: ".concat(this.name, ", Department: ").concat(this.department, ", Salary : ").concat(this.salary);
    };
    return Employee;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, department, salary) {
        return _super.call(this, name, department, salary) || this;
    }
    Manager.prototype.getManagerDetails = function () {
        return "Manager: ".concat(this.name, ", Department: ").concat(this.department);
    };
    return Manager;
}(Employee));
var emp = new Employee("Alice", "HR", 5000);
console.log(emp.getDetails());
var manager = new Manager("Bob", "IT", 10000);
console.log(manager.getManagerDetails());
