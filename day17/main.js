/**
 * day 17
 * difference symbols naive
 */
const differentSymbolsNaive = (str) => {

    const strArray = str.split('');
    const result  = strArray.filter((str, index ,array) => {
        return array.indexOf(str) === index;
    });
    console.log('symbolsNaive', result);
    console.log('symbolsNaiveLength', result.length);
}

/**
 * model answer 1
 */
const modelAnswerNo1 = (str) => {
    const strArray = str.split('');
    const uniqueChars = [];
    for (let str of strArray) {
        if (!uniqueChars.includes(str)) {
            uniqueChars.push(str);
        }
    }
    console.log('symbolsNaive', uniqueChars);
    console.log('symbolsNaiveLength', uniqueChars.length);
}

/**
 * model answer 2
 * 
 * new set(array)
 * あらゆる型で一意の値を格納できるメソッド
 * 戻り値はオブジェクト
 */
 const modelAnswerNo2 = (str) => {
    const strArray = str.split('');
    const uniqueChars = new Set(strArray);

    console.log('symbolsNaive', uniqueChars);
    console.log('symbolsNaiveSize', uniqueChars.size);
}


const str = 'cabac';
differentSymbolsNaive(str);
modelAnswerNo1(str);
modelAnswerNo2(str);