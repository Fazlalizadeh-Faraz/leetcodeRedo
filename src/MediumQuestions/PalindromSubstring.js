/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    const isPalindrom = (s) =>{
        if (s === '') {return false}
        let left = 0;
        let right = s.length - 1;
        while (left < right) {
//             faster than reverse and check
            if (s.charAt(left) !== s.charAt(right)) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }

    let count = 0;

    const traverse = (temp, index) => {

        if (isPalindrom(temp)) {
            count++;
        }

        if (index >= s.length) {
            return;
        }

        temp += s.charAt(index);
        traverse(temp, index+1);
    }

    for (let i = 0; i < s.length; i++) {
        traverse('', i);
    }
    return count;
};