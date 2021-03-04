/**
 * day7
 * count vowel(1) and consonant(2)
 */
const myAnswer = () => {
    const vowelArray = ['a', 'i', 'u', 'e', 'o' ];
    const target = 'abcde';
    const targetArray = target.split('');

    let counts = 0;

    for (let str of  targetArray) {
        if (vowelArray.includes(str)) {
            counts += 1;
        } else {
            counts += 2;
        }
    }
    console.log(counts);
}

/**
 * 模範解答
 */
const modelAnswer = () => {
    const vowels = ['a', 'i', 'u', 'e', 'o' ];
    const str = 'abcde';
    const chars = str.split('');

    // reduce()は,配列の各要素を順番に累積して1つの値にできる
    // 配列.reduce(function(累積値, 要素) { })
    // 第2引数の値は初期値（ここでいう０）
    const total = chars.reduce((acc, char) => {
        if (vowels.includes(char)) {
            return acc + 1;
        }
        return acc + 2;
    }, 0);

    console.log(total);
}

myAnswer();
modelAnswer();


