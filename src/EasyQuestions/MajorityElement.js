/**
 * @param {number[]} nums
 * @return {number}
 */
/*  we are assuming that majority exist */
var majorityElement = function (nums) {
  var obj = {}

  for (var i = 0; i < nums.length; i++) {
    obj[nums[i]] = obj[nums[i]] + 1 || 1
    if (obj[nums[i]] > nums.length / 2) return nums[i] // majority check
  }
}
