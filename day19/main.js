
/**
 * day 19
 * alphabet subsequence
 * @param {*} str 
 * @returns true whenno duplicates and is ascending a - z order
 */
const alphabetSubsequence = (str) => {
    const strArray = str.split('').sort();
    const uniqueArray = strArray.filter((str, index, array) => {
        return array.indexOf(str) === index ;
    })
    const uniqueStr = uniqueArray.join('');
    return str === uniqueStr;
}

/**
 * model answer
 */
const alphabetSubsequenceModelAnswer = (str) => {
    const chars = str.split('');
    // charCodeAt：指定された位置にある UTF-16 コードユニットを表す 0 から 65535 までの整数を返す
    const charCodes = chars.map((char) => char.charCodeAt(0));

    // 重複を除外した時の数が等しいかチェック
    if(new Set(charCodes).size !== charCodes.length) return false;

    // 順番チェック
    for (let i = 0; i < charCodes.length - 1; i++) {
        if(charCodes[i] > charCodes[i + 1]) return false;
    }
    return true;
}


const str1 = 'effg';
const str2 = 'cdce';
const str3 = 'ace';

console.log(alphabetSubsequence(str1));
console.log(alphabetSubsequence(str2));
console.log(alphabetSubsequence(str3));

console.log(alphabetSubsequenceModelAnswer(str1));
console.log(alphabetSubsequenceModelAnswer(str2));
console.log(alphabetSubsequenceModelAnswer(str3));