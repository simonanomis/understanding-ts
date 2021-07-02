function add2Numbers(n1: number, n2: number) {
    return n1 + n2;
}

function printSomeResult(num: number) {
    console.log('Result printSomeResult: ' + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
}

printSomeResult(add2Numbers(5, 12))

let comValues: (x: number, y: number) => number;

comValues = add2Numbers;

console.log("combineValues"+comValues(8, 8));

addAndHandle(10, 20, (result) => {
    console.log('Result addAndHandle: ' + result);
})