/**
 * day13 extractEachNth
 * @param {*} numsArray 
 * @param {*} nth 
 */
const extractEachNth = (numsArray, nth) => {
    return numsArray.filter(num =>  num % nth !== 0);
}

/**
 * filterおまけ
 * 重複している値排除する
 */
const removDuplicateNum = (numsArray) => {
    const result = numsArray.filter((num, index, array) => {
        // indexOf()で該当の値numが最初に出てくる位置indexを取得し比較
        // ズレがある場合は重複データ
        console.log(`${num} : ${array.indexOf(num)} : ${index}` );
        return array.indexOf(num) === index;
    })
    return result;
}

const numsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const nth = 3;
console.log(extractEachNth(numsArray, nth));

const numsArray2 = [3, 2, 2, 4, 8, 8, 8, 6, 9];
console.log(removDuplicateNum(numsArray2));