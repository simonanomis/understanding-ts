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

//FUNCTION OVERLOAD
function addCombinedTypes(a: string, b: string): string;
function addCombinedTypes(a: number, b: number): number;
//TYPE GUARDS
function addCombinedTypes(a: SomethingCombined, b: SomethingCombined) {
    if(typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

const resultNumber = addCombinedTypes(1, 5);
const resultString = addCombinedTypes('Anna', 'Backer');
resultString.split(' ');


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

//INDEX PROPERTIES

interface ErrorContainer {
    [propertyName: string]: string;
}

const errorBag: ErrorContainer = {
    email: 'Not a valid email address',
    1: 'Not a valid text message',
    username: 'Not a valid username',
}

//OPTIONAL CHAINING
const fetchedUserData = {
    id: 'u1',
    name: 'Max',
    job: {
        title: 'CEO',
        description: 'My own company'
    }
};
console.log('user title: ', fetchedUserData?.job?.title)


//NULLISH COALESCING
const userInputData = '';
//?? THIS MEANS IF IT IS NULL OR UNDIFINED
const storedUserInputData = userInputData ?? 'DEFAULT';
