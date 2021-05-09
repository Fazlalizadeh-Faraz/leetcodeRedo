var isPowerOfThree = function (n) {
  let m = 1,
    base = 3
  /* if we go over the number that means we 
  didn't reach it so is false */
  while (true) {
    if (m < n) {
      m *= base
    } else if (m > n) {
      return false
    } else {
      return true
    }
  }
}
