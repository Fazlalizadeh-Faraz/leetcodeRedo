/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b)

  const res = []

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] === nums[i - 1]) {
      continue // skip same elements to avoid duplicate triplets
    }
    let l = i + 1,
      r = nums.length - 1

    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r]

      if (sum === 0) {
        res.push([nums[i], nums[l], nums[r]])
        l++
        r--
        while (l < r && nums[l] === nums[l - 1]) {
          l += 1 // skip same elements to avoid duplicate triplets
        }
        while (l < r && nums[r] === nums[r + 1]) {
          r -= 1 // skip same elements to avoid duplicate triplets
        }
      } else if (sum < 0) {
        l++
      } else {
        r--
      }
    }
  }

  return res
}
