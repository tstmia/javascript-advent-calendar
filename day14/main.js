/**
 * day14
 * maximum absolute difference 
 * 
 * @param {*} nums
 */
const findDifference = (nums) => {
    let maxDiff = 0;
    for(let i = 0; i < nums.length - 1; i ++){
        // Math.abs()：数値の絶対値を返す
        const diff = Math.abs(nums[i] - nums[i + 1]);
        if (maxDiff < diff) {
            maxDiff = diff;
        }
    }
    return maxDiff
}

const nums1 = [2, 4, 1, 0];
const nums2 = [2, 9, 1, 0];

console.log(findDifference(nums1));
console.log(findDifference(nums2));