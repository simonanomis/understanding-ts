class Department {
    private employees: string[] = [];

    constructor(private readonly id: string, public name: string) {}

    describe(this: Department) {
        console.log(`Department (${this.id}): ${this.name}`);
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log("Number of employees: ", this.employees.length);
        console.log("Employees: ", this.employees)
    }
}

const accounting = new Department('a1','Accounting');
accounting.addEmployee("Anna");
accounting.addEmployee("Isaac");

accounting.describe();
accounting.printEmployeeInformation();