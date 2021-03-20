/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let numsLen = nums.length;
    let expectedTotal = 0;
    let actualTotal = 0;
    for (let i = 0; i < numsLen; i++) {
        expectedTotal += i + 1;
        actualTotal += nums[i];
    }
    return expectedTotal - actualTotal;
};