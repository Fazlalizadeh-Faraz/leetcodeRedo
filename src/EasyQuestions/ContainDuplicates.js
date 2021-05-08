/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let map = new Map()

  for (let i = 0; i < nums.length; i++) {
    // if we see the element we know that is repeated
    if (map.has(nums[i])) {
      return true
    } else {
      map.set(nums[i], i)
    }
  }
  return false
}
