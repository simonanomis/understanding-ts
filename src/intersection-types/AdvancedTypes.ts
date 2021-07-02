//INTERSECTION TYPES
type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const elEmployee: ElevatedEmployee = {
    name: 'Anna',
    privileges: ['create-server'],
    startDate: new Date(),
}

type SomethingCombined = string | number;
type Numeric = number | boolean;

type Universal = SomethingCombined & Numeric; //here the intersection is numeric

//TYPE GUARDS
function addCombinedTypes(a: SomethingCombined, b: SomethingCombined) {
    if(typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
    console.log('Name: ' + emp.name);
    if('privileges' in emp) { //is 'privileges' exist as property in Unknown Employee?
        console.log('Privileges: ' + emp.privileges);
    }
    if('startDate' in emp) { //is 'privileges' exist as property in Unknown Employee?
        console.log('Start Date: ' + emp.startDate);
    }
}
printEmployeeInformation(elEmployee);

class Car {
    drive() {
        console.log('Driving...');
    }
}

class Truck {
    drive() {
        console.log('Driving a truck...');
    }

    loadCargo(amount: number) {
        console.log('Loading cargo...' + amount)
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    if(vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}

useVehicle(v1);
useVehicle(v2);

//Discriminated union

interface Bird {
    type: 'bird';
    flyingSpeed: number;
}

interface Horse {
    type: 'horse';
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
    let speed: number;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
    }
    console.log('Moving with speed: ' + speed);
}

moveAnimal({type: "bird", flyingSpeed: 10})

//TYPE CASTING 2 syntax
//const userInputElement = <HTMLInputElement> document.getElementById('user-input')!;
const userInputElement = document.getElementById('user-input')! as HTMLInputElement;
userInputElement.value = 'Hi there';

//OR if you are not sure if it is null
const userInputElement1 = document.getElementById('user-input');
if(userInputElement1) {
    (userInputElement1 as HTMLInputElement).value = 'Hi there';
}
