class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  describe() {
    return `${this.name} works in the ${this.department} department.`;
  }
}

class Manager extends Employee {
  constructor(name, department, teamSize) {
    super(name, department);
    this.teamSize = teamSize;
  }

  describe() {
    return `${this.name} manages a team of ${this.teamSize} in the ${this.department} department.`;
  }
}

class Company {
  constructor() {
    this.employees = [];
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }

  listEmployees() {
    this.employees.forEach(emp => {
      console.log(emp.describe());
    });
  }
}

const emp1 = new Employee("Miles Morales", "Sustainability");
const emp2 = new Employee("Adam Silver", "Risk & Compliance");
const mgr1 = new Manager("Baker Mayfield", "Strategic Operations", 7);