/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var wiggleSort = function(nums) {
    // sorting
    nums.sort((a , b) => a - b);

    const tmp = [...nums]; // og the array
    let low = Math.floor((nums.length - 1)/2);
    let high = nums.length -1;
    for(let i = 0; i < nums.length; i++) {
        if(i % 2 !== 0) {
            console.log("nums[i] => ", nums[i])
            console.log("tmp[high] => ", tmp[high])

            nums[i] = tmp[high];
            high--;
        } else {
            console.log("nums[i] => ", nums[i])
            console.log("tmp[low] => ", tmp[low])
            nums[i] = tmp[low];
            low--;
        }
    }
    return nums;
};