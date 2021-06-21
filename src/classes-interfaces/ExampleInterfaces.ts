interface INamed {
    readonly name: string;
    outputName?: string;
}

interface IGreet extends INamed{
    greet(phrase: string): void;
}

interface IFunIterface {
    (a: number, b: number): number;
}

class Person implements IGreet {
    name: string;
    age = 30;

    constructor(name: string) {
        this.name = name;
    }
    greet(phrase: string) {
        console.log(phrase + " " + this.name);
    }
}

let userPerson: IGreet;
userPerson = new Person('Anna');
userPerson.greet("Hello there I am");
console.log(userPerson);