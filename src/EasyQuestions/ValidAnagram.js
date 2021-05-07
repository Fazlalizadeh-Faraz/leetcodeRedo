/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let map = {}

  for (let c of s) {
    map[c] = map[c] + 1 || 1
  }

  for (const c of t) {
    if (!map[c]) return false
    map[c]--
    if (map[c] === 0) delete map[c]
  }

  return [...Object.keys(map)].length === 0
}
