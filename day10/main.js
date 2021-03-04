const inputArray = [3 ,6, -2, -5, 7, 3];

/**
 * day10
 * adjacent elements products
 */
const myAnswer = (inputArray) => {
    const length = inputArray.length;
    let largestNum;
    let lagestPair = [];
    
    for (let i = 0; i < length; i++) {

        if (i == length - 1) continue;

        const product = inputArray[i] * inputArray[i + 1];
        if (i == 0  || product > largestNum) {
            largestNum = product;
            lagestPair = [inputArray[i], inputArray[i + 1]];
        }
    }

    console.log('largestNum', largestNum);
    console.log('lagestPair', lagestPair);
    
}

/**
 * 模範解答
 */
const modelAnswer = (inputArray) => {
    const length = inputArray.length;
    let largestNum = inputArray[0] * inputArray[1];
    let lagestPair = [inputArray[0], inputArray[1]];
    
    for (let i = 0; i < length - 1; i++) {

        const product = inputArray[i] * inputArray[i + 1];
        if (product > largestNum) {
            largestNum = product;
            lagestPair = [inputArray[i], inputArray[i + 1]];
        }
    }

    console.log('largestNum', largestNum);
    console.log('lagestPair', lagestPair);
    
}

myAnswer(inputArray);
modelAnswer(inputArray);