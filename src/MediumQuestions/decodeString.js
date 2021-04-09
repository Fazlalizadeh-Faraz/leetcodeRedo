const decodeString = (s) => {
    let multiply = []
    let tempMult = ''
    let repeatStr = []
    let sol = ''

    for (let char of s){
        if(!isNaN(char)){
            tempMult = `${tempMult}${char}` // 31
        }else if (char === '['){
            multiply.push(tempMult)
            tempMult = ''
            repeatStr.push(sol)
            sol = ''
        }else if (char === ']'){
            sol = repeatStr.pop() + sol.repeat(multiply.pop())
        }else {
            sol += char
        }
    }
    return sol
}


// to be deleted all in one page
// valid paranthesis
const isValid = (s) => {
    const stack = [];
    const complement = {
        ')': '(',
        '}': '{',
        ']': '[',
    };

    for (let char of s) {
        if (!complement[char]) stack.push(char);
        else if (stack.pop() !== complement[char]) return false;
    }
    return stack.length === 0;
}

/*
* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* valid palindrome
* */

var isPalindrome = function(s) {
    // first clean the input using split and join
    let cleanedStr = s.split(/[^a-z0-9$]/gi).join("").toLowerCase();

    // use two pointers to check if the two ends are the same
    let l = 0, r = cleanedStr.length-1;
    while(l < r) {
        if (cleanedStr.charAt(l) !== cleanedStr.charAt(r)) {
            return false;
        }
        l++;
        r--;
    }
    return true;
};

/*
* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* anagram --> as long has same amount of characters in each of the words
* */
var isAnagram = function(s, t) {
    if (s.length != t.length) {
        return false;
    }
    let map1 = new Map()
    let map2 = new Map();
    for (let i = 0; i < s.length; i++) {
        map1.set(s[idx], map1.get(s[idx]) + 1 || 1)
        map2.set(t[idx], map2.get(t[idx]) + 1 || 1);
    }

    if (map1.size!=map2.size) {
        return false
    }
    for (const [key,value] of map1) if (map2.get(key)!=value) return false;
    return true
};


/*
* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* two sum  -->  return indices of the two numbers such that they add up to target.
* */

var twoSum = function(nums, target) {
    const numsMap = {};
    for(let i=0; i<nums.length; i++){
        const currentMapVal = numsMap[nums[i]];
        if(currentMapVal >= 0){
            return [currentMapVal, i];
        }
        else {
            const numToFind = target - nums[i];
            numsMap[numToFind] = i;
        }
    }
    return null;
};

/*
* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* symmetric tree
* */

var isSymmetric = function(root) {
    const innerIsSymmetric = (rootA, rootB) => {

        if (rootA === null && rootB === null) return true;
        if (rootA === null || rootB === null) return false;

        return (rootA.val === rootB.val) &&
            innerIsSymmetric(rootA.left, rootB.right) &&
            innerIsSymmetric(rootA.right, rootB.left);
    }

    return innerIsSymmetric(root, root);

};

/*
* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* mySQRT --> Given a non-negative integer x, compute and return the square root of x.
* */

var mySqrt = function(x) {
    let i = 0;
    let value = 0;

    while(value < x){
        value = i * i;
        if(value < x)i++;
    }
    return value == x? i: i-1;
};

/*
* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* singleNumber --> Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
* */
function singleNumber (nums) {
    const memo = new Set();

    for (let num of nums) {
        if (memo.has(num)) {
            memo.delete(num);
        } else {
            memo.add(num);
        }
    }

    return [...memo][0];
}

/*
* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* romanToInt --> Given a roman numeral, convert it to an integer.
* */
var romanToInt = function(s) {
    let result = 0
    let roman = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }

    for (let i = 0; i < s.length; i++) {
        let current = s[i]
        let next = s[i + 1]
        // either add or remove it
        roman[current] < roman[next] ? result  -= roman[current] : result += roman[current]
    }

    return result
}

/*
* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* reverseString --> Write a function that reverses a string. The input string is given as an array of characters s.
* */

var reverseString = function(s) {
    let left = 0
    let right = s.length -1;
    while (left < right) {
        [s[left++], s[right--]] = [s[right], s[left]]
    }
    return s;
};

/*
* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* reverseList --> Write a function that reverses a string. The input string is given as an array of characters s.
* */
var reverseList = function(head) {
    if (head == null) return head
    let dummy = new ListNode(0, null)

    while(head != null) {
        let currHead = head
        head = head.next
        currHead.next = dummy.next
        dummy.next = currHead
    }
    return dummy.next
};

/*
* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* Reverse Integer -->
* Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
*
* */
var reverse = function(x) {
    const sign = Math.sign(x)

    let rest = Math.abs(x);

    let reversed = 0;
    while(rest>0){
        const rightmostDigit = rest % 10;
        // iterating the pointer
        rest = Math.floor(rest / 10);
        reversed *= 10;
        reversed += rightmostDigit;

        if(reversed > (2**31)){
            return 0
        }
    }
    return reversed * sign
};

/*
* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* Remove Duplicates from Sorted Array
* */

var removeDuplicates = function(nums) {
    let a = [...new Set(nums)]
    let p = nums.length;
    for(let i=0;i<p;i++){
        if(i<a.length) nums[i] = a[i];
        else nums.pop();
    }
};

/*
* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* Power of Three --> Given an integer n, return true if it is a power of three. Otherwise, return false.
* */

var isPowerOfThree = function(n) {
    let i = 3;

    if(n <= 0){
        return false;
    }else if(n === 1){
        return true;
    }
    while(i <= n){
        if(i === n){
            return true;
        }
        i*=3;
    }
    return false;
};

/*
* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* Plus One --> Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.
* */

var plusOne = function(digits) {
    let i = digits.length - 1;
    while (i >= 0) {
        if (digits[i] == 9) {
            digits[i] = 0;
        } else {
            digits[i] += 1;
            break;
        }
        i--;
    }
    if (i < 0) digits.unshift(1);
    return digits;
};

/*
* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* Palindrome Linked List --> Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.
* */
var isPalindrome = function(head) {
    if(head === null) return true

    let ll = head
    const arr = [ll.val]

    while(ll.next !== null) {
        ll = ll.next;
        arr.push(ll.val)
    }

    let low = 0;
    let high = arr.length - 1;

    while(low < high) {
        if(arr[low] === arr[high]) {
            low++;
            high--;
        } else {
            return false;
        }
    }
    return true
};

/*
* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* Pascal's Triangle--> each number is the sum of the two numbers directly above it as shown:
* */
var generate = function(numRows) {
    if (numRows === 0) return [];
    let pascal = [[1]];
    for (let i = 1; i < numRows; i ++) {
        let currentRow = new Array(i + 1);
        currentRow[0] = 1;
        currentRow[currentRow.length - 1] = 1;
        for (let j = 1; j < i; j ++) {
            currentRow[j] = pascal[i-1][j-1]+pascal[i-1][j]
        }
        pascal.push(currentRow)
    }
    return pascal
};

/*
* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* Move Zeroes -->
* Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
* [0,1,0,3,12]
* */

var moveZeroes = function(nums) {
    let index = 0;
    for (let i = 0; i < nums.length; i ++) {
        if (nums[i] !== 0) {
            nums[index++] = nums[i]
        }
    }
    for (let i = index; i < nums.length; i++) {
        nums[i] = 0
    }
};

/*
* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* Missing Number --> Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
* */

var missingNumber = function(nums) {

    let max = nums.length;
    let sum = 0;
    for (let i = 1; i <= max; i ++) {
        sum += i;
    }
    for (let num of nums) {
        sum -= num;
    }
    return sum;
};

/*
* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* Best Time to Buy and Sell Stock
* */

var maxProfit = function(prices) {
    let profit = 0
    let min = prices[0]
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i]
        }
        let currentProfit = prices[i] - min
        if (currentProfit > profit) {
            profit = currentProfit
        }
    }
    return profit
};

/*
* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* Count Primes
* */
var countPrimes = function (n) {
    let primes = new Array(n).fill(true);
    primes[0] = false, primes[1] = false;
    for (let i = 2; i < n; i++) {
        for (let j = i**2; j < n; j += i) {
            primes[j] = false;
        }
    }
    return primes.filter(bool => bool == true).length;
    // Time Complexity: O(nlog(n))
    // Space Complexity: O(n)
};