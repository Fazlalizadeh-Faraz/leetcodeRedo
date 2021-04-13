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