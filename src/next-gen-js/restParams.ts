const addMultipleNumbers = (...numbers: number[]) => {
    return numbers.reduce((currentResult, currentValue) => {
        return currentResult + currentValue;
    }, 0)
};

const addedMultipleNumbers = addMultipleNumbers(1, 2, 3, 4, 5, 55);
console.log("addedMultipleNumbers ", addedMultipleNumbers)


