// String to Integer (atoi)
function myAtoi (str) {
    const abc = '0123456789';
    const MIN = -Math.pow(2, 31);
    const MAX = -MIN - 1;
    let result = '0';
    let isPositive = true;
    let checked = false;

    for (let charac of str) {
        // ignore the spaces
        if (charac === ' ' && !checked) {
            continue;
        }
        // determine the sign
        if (charac === '+' && !checked) {
            isPositive = true;
            checked = true;
            continue;
        }
        // determine the sign
        if (charac === '-' && !checked) {
            isPositive = false;
            checked = true;
            continue;
        }
        // if not a number
        if (abc.indexOf(charac) === -1) {
            break;
        }
        //default sign
        checked = true;

        result += charac;
    }

    result = Number(result);

    if (isPositive) {
        // make sure not bigger than limit
        if (result > MAX) {
            result = MAX;
        }
    } else {
        // make sure not smaller than limit
        result > 0 ? result *= -1 : result;
        if (result < MIN) {
            result = MIN;
        }
    }

    return result;
}

// container with the most water
const maxArea = (height) => {
    let max_area = 0;
    let left_pntr = 0 ;
    let right_pntr = height.length-1;

    while (left_pntr < right_pntr ){

        let left_height = height[left_pntr];
        let right_height = height[right_pntr];

        // we take the min since the taller col will be fine
        let min_height = Math.min(left_height , right_height)
        // find max_area
        max_area = Math.max(max_area , min_height*(right_pntr - left_pntr))

        if (left_height < right_height) {
            left_pntr++;
        }else{
            right_pntr--;
        }
    }
    return max_area;
}


// three Sum
var threeSum = function(nums) {
    let result = [];
    if (nums.length < 3) return result;

    nums.sort((a,b) => a - b);
    //  nums = [...new Set(nums)].sort((a,b) => a-b)//dont know why this isn't working

    for(let i = 0 ; i < nums.length; i++) {
        let sum = 0;
        let left = i+1;
        let right = nums.length - 1;
        while( left < right) {
            sum = nums[i] + nums[left] + nums[right];
            if(sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                while(nums[left] === nums[left+1]) left++;
                while(nums[right] === nums[right-1]) right--;
                left++;
                right--;
            } else if ( sum < 0 ) left++
            else right--;
        }
        while(nums[i+1] === nums[i]) i++;
    }
    return result;
};