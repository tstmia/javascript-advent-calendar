/**
 * day3
 * chunky Monkey 
 */
const sliceSamle = () => {
    
    const chunkyMonkey = (array, sliceNum) => {
        // str=arrayまたはString str.slice( 開始位置, 終了位置(省略可能) );
        // 終了位置で指定した一つ前までが切り離される
        return [array.slice(0,sliceNum), array.slice(sliceNum)];
    };

    const arraySample1 = ["a", "b", "c", "d"];
    const arraySanple2 = [0, 1, 2, 3, 4, 5];
    
    result1 = chunkyMonkey(arraySample1, 2);
    result2 = chunkyMonkey(arraySanple2, 4);
    
    console.log("result1", result1);
    console.log("result2", result2);

};

/**
 * day4
 * Century From Year
 */
const centuryFromYear = () => {

    const getCentury = (targetYear) => {
        const year = parseInt(targetYear);
        let resultCentury;

        if (year % 10 === 0) {
            resultCentury = Math.floor(parseInt(year) / 100);
        } else {
            resultCentury = Math.floor(parseInt(year) / 100) + 1;
        }
        return resultCentury;
    };

    const year1 = 1905;
    const year2 = 1700;

    const century1 = getCentury(year1);
    const century2 = getCentury(year2);

    console.log("century1", century1);
    console.log("century2", century2);

};

/**
 * day5
 * reverse a string
 */
const reverseStringFunc = (word) => {

    const reversed = word.split('') // 空文字で分割して配列に
                     .reverse()     // 配列を反転
                     .join('');     // 空文字で連結
    console.log(reversed);
};
reverseStringFunc("hello");

