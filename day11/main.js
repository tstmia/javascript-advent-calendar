/**
 * day11
 * avoid obstacle
 */
const myAnswer = (nums) => {
    nums.sort((num1, num2) => num1 - num2 > 0);
    
    minimalJampNum = nums[0];

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] + 1 !=  nums[i + 1]) {
            minimalJampNum = nums[i] + 1 ;
            console.log(minimalJampNum);
            return;
        }
    }

}

/**
 * 模範解答
 */
const modelAnswer = (nums) => {

    const largestNum = nums.sort((num1, num2) => num1 - num2)[nums.length - 1];

    for(let i = 1; i <= largestNum + 1; i++){
        // every()は、配列が条件をすべて満たす場合にtrueを返す
        // 下記は、配列の中にiで割り切れる数字があるかで、配列の中にi自身ががあるかを確認している
        if (nums.every((value) => value % i != 0)) {
            console.log(i);
            return;
        }

    }

}

const nums = [5, 3, 6, 7, 9];
myAnswer(nums);
modelAnswer(nums);
