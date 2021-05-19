var longestCommonPrefix = function (arr) {
  if (!arr.length) return ''
  if (arr.length == 1) return arr[0]

  var firstChosenWord = arr[0]
  var length = firstChosenWord.length
  /* the idea is to start from the full word and
  reduce down to smaller sections of the word */
  while (length > 0) {
    // looping the other words
    for (var i = 1; i < arr.length; i++) {
      if (arr[i].substr(0, length) != firstChosenWord) {
        break
      } else {
        // make sure that all words have been
        // compared
        if (i == arr.length - 1) {
          return firstChosenWord.substr(0, length)
        }
      }
    }

    length--
    firstChosenWord = firstChosenWord.substr(0, length)
  }

  return ''
}
