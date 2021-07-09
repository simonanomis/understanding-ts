//BUILT IN GENERICS
const nameGenerics: Array<string> = [];

const promiseGen: Promise<string> = new Promise((resolve) => {
    setTimeout(() => {
        resolve('This is a promise');
    }, 2000);
});

//CREATE GENERIC FUNCTION
function mergeGenerics<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}
const mergeObj = mergeGenerics({name: 'Anna', hobbies: ['Sports']}, {age: 20});
console.log(mergeObj.age);


interface Lengthy {
    length: number;
}
function countAndPrint<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'Got no Value';
    if(element.length === 1) {
        descriptionText = 'Got 1 element';
    } else if(element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements';
    }
    return [element, descriptionText];
}

console.log(countAndPrint('Hi there'));

//keyOf constrain
function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return 'Value: ' + obj[key];
}

console.log(extractAndConvert({name: 'Anna'}, 'name'));

//GENERIC CLASSES

class DataStorage<T extends string | number | boolean> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        if(this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Anna');
textStorage.addItem('Ben');
textStorage.addItem('John');
textStorage.removeItem('Ben');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(1);
numberStorage.addItem(2);

// const objectStorage = new DataStorage<object>();
// objectStorage.addItem(new Date());
// objectStorage.addItem({name: 'Bob'});
// objectStorage.removeItem({name: 'Bob'});

//GENERIC UTILITY TYPES
interface CourseGoal {
    title: string;
    description: string;
    completeUtil: Date;
}

function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUtil = date;
    return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ['Anna', 'Ben', 'John'];
//names.push('Conny'); can not change readonly array