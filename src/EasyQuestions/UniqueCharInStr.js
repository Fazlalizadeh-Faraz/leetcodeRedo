/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const map = new Map()

    for(const letter of s) {
        map.set(letter, map.get(letter) + 1 || 1) // the  logical or is like the default in java
    }
    let sLength = s.length;


    for(let i=0; i<sLength; i++) {
        if(map.get(s[i]) === 1) {
            return i
        }
    }

    return -1
};