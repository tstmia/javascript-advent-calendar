/**
 * day21
 * sum of 2
 * 
 * @param {*} numArray1 
 * @param {*} numArray2 
 * @param {*} value 
 * @returns true if a value can be found that by adding one number from each list
 */
const sumOfTwo = (numArray1, numArray2, value) => {
    for(let num1 of numArray1){
        for(let num2 of numArray2){
            if(num1 + num2 === value) return true;
        }
    }
    return false;
};

/**
 * modelAnswer
 */
 const modelAnswerOfSumOfTwo = (numArray1, numArray2, value) => {
    const map = {};
    for(let num of numArray1){
        const difference = value - num;
        map[difference] = difference;
    }
    for(let num of numArray2){
        // hasOwnProperty()はオブジェクト自身が指定されたプロパティを持っているかどうか真偽を返す
        // map = { '39': 39, '40': 40, '41': 41 }
        if(map.hasOwnProperty(num)) return true;
    }
    return false;
};


const a = [1, 2, 3];
const b = [10, 20, 30, 40];
const v = 42;
const v1 = 46;

console.log(sumOfTwo(a, b, v));
console.log(sumOfTwo(a, b, v1));
console.log(modelAnswerOfSumOfTwo(a, b, v));
console.log(modelAnswerOfSumOfTwo(a, b, v1));
