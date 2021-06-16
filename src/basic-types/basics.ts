function addSomething(n1: number, n2: number, showResult: boolean, phrase: string) {
    const result = n1 + n2;
    if(showResult) {
        console.log("addSomething" + phrase+result);
    } else {
        return result;
    }
    return n1 + n2;
}

addSomething(5, 16, true, 'Result is: ');
