class Department {
    protected employees: string[] = [];
    static fiscalYear: string;
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

    static createEmployee(name:string) {
        return {name:name};
    }
}


class ITDepartment extends Department {
    constructor(id:string, public admins: string[]) {
        super(id, 'IT');
    }
}


const itDepartment = new ITDepartment('i1',['Max']);
console.log(itDepartment);
itDepartment.addEmployee("Anna");
itDepartment.addEmployee("Isaac");

itDepartment.describe();
itDepartment.printEmployeeInformation();

class AccountingDepartment extends Department {
    private lastReport: string;
    constructor(id:string, public reports: string[]) {
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }

    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No last report');
    }

    set mostRecentReport(value:string) {
        if(!value) {
            throw new Error('Please provide valid value');
        }
        this.addReport(value);
    }
    addEmployee(name:string) {
        if(name === 'Max') {
            return;
        }
        this.employees.push(name);
    }
    addReport(report: string) {
        this.reports.push(report);
        this.lastReport = report;
    }

    printReports() {
        console.log(this.reports)
    }
}


const employeeOne = Department.createEmployee('John');
console.log("employeeOne", employeeOne + Department.fiscalYear);

const accountingDepartment = new AccountingDepartment('a1', []);
accountingDepartment.mostRecentReport = 'Valid value report';
accountingDepartment.addEmployee('Ben');
accountingDepartment.addReport('Something went wrong');
accountingDepartment.printReports();
accountingDepartment.printEmployeeInformation();
console.log(accountingDepartment.mostRecentReport);