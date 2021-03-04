/**
 * day6
 * sort by length
 */
const myAnswer = () => {
    const sortByLength = (stringArray) => {
        // sort 単純な文字列の並び替えであればそのまま実行,そうでない場合は比較関数compare()を使う
        // stringArray.sort(compare); で実行されていること
        // 1:'abc'と''    比較し入れ替え -> ['', 'abc', 'aaa', 'zz']
        // 2:'abc'と'aaa' 比較         -> ['', 'abc', 'aaa', 'zz']
        // 3:'aaa'と'zz'  比較し入れ替え -> ['', 'abc', 'zz', 'aaa']
        // 4:'abc'と'zz'  比較し入れ替え -> ['', 'zz', 'abc', 'aaa']
        // 5:''と'zz'     比較         -> ['', 'zz', 'abc', 'aaa']
        const result = stringArray.sort(compare);
        return result;
    };
    
    const compare = (a, b) => {
        return a.length - b.length;
    };
    
    var stringArray = ['abc', '', 'aaa', 'zz'];
    // expected outPut => ['', 'zz', 'abc', 'aaa'];
    
    const sortedArray = sortByLength(stringArray);
    console.log(sortedArray);
};

/**
 * day6
 * 模範解答
 */
const modelAnswer = () => {
    const sortByLength = (stringArray) => {
        return stringArray.sort((strArray1, strArray2) => strArray1.length - strArray2.length);
    };

    var stringArray = ['abc', '', 'aaa', 'zz'];
    const sortedArray = sortByLength(stringArray);
    console.log(sortedArray);
};

myAnswer();
modelAnswer();
