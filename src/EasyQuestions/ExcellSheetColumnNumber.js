var titleToNumber = function (s) {
  let colNum = 0
  for (let i = 0; i < s.length; i++) {
    const element = s[s.length - 1 - i]

    colNum += Math.pow(26, i) * (element.charCodeAt(0) - 64)
  }
  return colNum
}
