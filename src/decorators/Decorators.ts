//DECORATOR FACTORY
function Logger(logString:string) {
    return function(constructor: Function) {
        console.log('Logger started: ' + logString);
        console.log(constructor);
    };
}

function WithTemplate(template:string, hookId: string) {
    return function<T extends {new(...args: any[]): {name: string}}> (originalConstructor: T) {
        return class extends originalConstructor{
            constructor(..._: any[]) {
                super();
                console.log('Rendering template...')
                const hookElement = document.getElementById(hookId);
                if(hookElement) {
                    hookElement.innerHTML = template;
                    hookElement.querySelector('h2')!.textContent = this.name;
                }
            }

        }
    }
}

@Logger('LOGGING-PERSON')
@WithTemplate('<h2> My person decorator object</h2>', 'decoratorApp')
class PersonDec {
    name = 'Max';

    constructor() {
        console.log('Creating person object');
    }
}

const personDec = new PersonDec();
console.log(personDec);

//Property Decorators
function LogDec(target: any, properyName:string) {
    console.log('Property decorator!');
    console.log(target, properyName);
}

//Accessors and Parameter Decorators
function LogDecAccess(target: any, properyName:string, propertyDecriptor: PropertyDescriptor) {
    console.log('Accessors and Parameter Decorators!');
    console.log(target, properyName, propertyDecriptor);
}

function LogDecAccess2(target: any, properyName: string | Symbol, propertyDecriptor: PropertyDescriptor) {
    console.log('Method Decorator!');
    console.log(target, properyName, propertyDecriptor);
}

function LogDecAccess3(target: any, properyName: string | Symbol, position: number) {
    console.log('Parameter Decorator!');
    console.log(target, properyName, position);
}

class ProductDec {
    @LogDec
    title: string;
    private _price: number;

    constructor(title: string, price: number) {
        this.title = title;
        this._price = price;
    }

    @LogDecAccess
    setPrice(price: number) {
        if(price <= 0) {
            throw new Error('Price must be positive');
        }
        this._price = price;
    }

    @LogDecAccess2
    getPriceWithTax(@LogDecAccess3 tax: number) {
        return this._price * (tax + 1);
    }
}

function Autobind(_: any, _2: string, desscriptor: PropertyDescriptor) {
    const originalMethod = desscriptor.value;
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            return originalMethod.bind(this);
        }
    };
    return adjDescriptor;
}

class PrinterDec {
    message = 'This works!';

    @Autobind
    showMessage() {
        console.log(this.message);
    }
}

const printerDec = new PrinterDec();
const buttonDec = document.querySelector('button2')!;
buttonDec.addEventListener('click', printerDec.showMessage);

//VALIDATION AND DECORATORS
interface ValidatorConfig {
    [property: string]: {
        [validProperty: string]: string[] //required, positive
    }
}

const registeredValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: [...registeredValidators[target.constructor.name][propName], 'required']
    };
}

function PositiveNumber(target: any, propName: string) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: [...registeredValidators[target.constructor.name][propName], 'positive']
    };
}

function validate(obj:any) {
    const objValidatorConfig = registeredValidators[obj.constructor.name];
    if (!objValidatorConfig) {
        return true;
    }
    let isValid = true;
    for (const propertyName in objValidatorConfig) {
        for (const validator of objValidatorConfig[propertyName]) {
            switch (validator) {
                case 'required':
                    isValid = isValid && !!obj[propertyName];
                    break;
                case 'positive':
                    isValid = isValid && obj[propertyName] > 0;
                    break;
            }
        }
    }
    return isValid;
}

class CourseDec {
    @Required
    title: string;
    @PositiveNumber
    price: number;

    constructor(title: string, price: number) {
      this.title = title;
      this.price = price;
    }
}


const courseForm = document.querySelector('form')!;
courseForm.addEventListener('submit', event => {
    event.preventDefault();
    const titleElement = document.getElementById('title') as HTMLInputElement;
    const priceElement = document.getElementById('price') as HTMLInputElement;

    const title = titleElement.value;
    const price = +priceElement.value;

    const createdCourse = new CourseDec(title, price);
    if(!validate(createdCourse)){
        alert('Invalid course or price please try again!');
        return;
    }
    console.log(createdCourse);
});

