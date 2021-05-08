/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  let output = 0
  for (let i = 0; i < columnTitle.length; i++) {
    const code = columnTitle[i].charCodeAt(0) - 64
    output = output * 26 + code
  }
  return output
}
