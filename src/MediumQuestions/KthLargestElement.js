/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    let sortedArr = nums.sort(function(a, b) {return a-b});
    return sortedArr[sortedArr.length - k]
};

