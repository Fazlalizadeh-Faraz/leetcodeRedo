var longestCommonPrefix = function (arr) {
  if (!arr.length) return ''
  if (arr.length == 1) return arr[0]

  var longestStr = arr[0]
  var length = longestStr.length
  /* the idea is to start from the full word and
  reduce down to smaller sections of the word
   */
  while (length > 0) {
    // looping the other words
    for (var i = 1; i < arr.length; i++) {
      if (arr[i].substr(0, length) != longestStr) {
        break
      } else {
        if (i == arr.length - 1) {
          return longestStr.substr(0, length)
        }
      }
    }

    length--
    longestStr = longestStr.substr(0, length)
  }

  return ''
}
