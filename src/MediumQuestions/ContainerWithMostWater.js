/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let max_area = 0
  let l = 0
  let r = height.length - 1

  while (l < r) {
    let left_height = height[l]
    let right_height = height[r]
    // find the min height in order to calculate the area
    let min_height = Math.min(left_height, right_height)
    // find max_area
    max_area = Math.max(max_area, min_height * (r - l))
    // move smaller one
    if (left_height < right_height) l++
    else r--
  }
  return max_area
}
