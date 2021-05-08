/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  let output = 0
  for (let i = 0; i < columnTitle.length; i++) {
    // A starts at 65
    const code = columnTitle[i].charCodeAt(0) - 64
    // since it is base 26 we just need to times by 26
    output = output * 26 + code
  }
  return output
}
