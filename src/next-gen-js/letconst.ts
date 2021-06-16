const userName = "Simona";

let age = 30;

age = 31;

const addNumbers = (a: number, b: number = 1) => a + b;

// const printOutput = (output: string | number) => {
//     console.log(output);
// }


const printOutput: (a: number | string) => void = output => console.log(output);


printOutput("addNumbers " + addNumbers(568, 344));