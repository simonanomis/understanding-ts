function combine(input1: number | string, input2: number | string, resultConversion: 'as-number' | 'as-text') {
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