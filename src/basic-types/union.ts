type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

function combine(input1: Combinable, input2: Combinable, resultConversion: ConversionDescriptor) {
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2; //each input with + is converted to a number befoe combine
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

const combineAges = combine(20, 26, 'as-number');
console.log(combineAges)

const combineNames = combine('Ana', 'Ben', 'as-text');
console.log(combineNames)