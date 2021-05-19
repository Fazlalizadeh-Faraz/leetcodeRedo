var lengthOfLongestSubstring = function (s) {
  const set = new Set()
  let longest = 0
  let i = 0
  let j = 0

  while (i < s.length && j < s.length) {
    if (!set.has(s[j])) {
      set.add(s[j])
      longest = Math.max(longest, j - i + 1)
      j += 1
    } else {
      set.delete(s[i])
      i += 1
    }
  }
  return longest
}
