function add(n1: number, n2: number) {
    return n1 + n2;
}

function printSomeResult(num: number) {
    console.log('Result printSomeResult: ' + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
}

printSomeResult(add(5, 12))

let combineValues: (x: number, y: number) => number;

combineValues = add;

console.log("combineValues"+combineValues(8, 8));

addAndHandle(10, 20, (result) => {
    console.log('Result addAndHandle: ' + result);
})