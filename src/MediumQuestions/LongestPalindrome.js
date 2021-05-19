var longestPalindrome = function (s) {
  for (let i = s.length - 1; i >= 0; i--) {
    let start = 0
    let end = i
    /* since we going to be checking from the largest to smallest if we find one
    we can return */
    while (end < s.length) {
      if (isPalindrome(s, start, end)) {
        return s.substring(start, end + 1)
      }
      start++, end++
    }
  }
  return ''
  // T.C: O(N^3)
  // S.C: O(1)
}

const isPalindrome = (str, i, j) => {
  let start = i,
    end = j
  while (start < end) {
    if (str[start] !== str[end]) {
      return false
    }
    start++, end--
  }
  return true
}
