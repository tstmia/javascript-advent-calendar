/**
 * day 18
 * array previous less
 * @param {*} num 数値の配列
 */
const arrayPreviousLess = (num) => {
    const previousLess = [];
    for (let i = num.length -1; i >= 0; i--) {
        if (num[i] - num[i-1] > 0) {
            // unshift()メソッド実行で、配列の先頭に要素が追加
            previousLess.unshift(num[i-1]);
        } else if (!num[i-1] || (num[i] - num[i-1] <= 0)) {
            previousLess.unshift(-1);
        }
    }
    console.log(previousLess);
}
const items = [3, 5, 2, 4, 5];

arrayPreviousLess(items); //expect result[-1, 3, -1, 2, 4]