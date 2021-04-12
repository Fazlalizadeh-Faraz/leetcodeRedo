/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let res = new ListNode()
    let cur = res;
    let carry= 0
    while(l1 || l2 || carry){
        if(l1){
            carry += l1.val
            l1 = l1.next
        }
        if(l2){
            carry += l2.val
            l2 = l2.next
        }

        const lastDigit = carry %10
        carry = Math.floor(carry /10)
        cur.next = new ListNode(lastDigit)
        cur = cur.next
    }
    return res.next
};

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let letter = new Map()
    let longestLen =  0
    let len = 0
    for (let i = 0; i < s.length; i++) {
        if(letter.get(s[i]) !== undefined && letter.get(s[i]) >= i-len){
            len = i - letter.get(s[i])
        }else{
            len ++
        }
        letter.set(s[i], i)
        longestLen = Math.max(longestLen, len)
    }
    return longestLen
};

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {

};