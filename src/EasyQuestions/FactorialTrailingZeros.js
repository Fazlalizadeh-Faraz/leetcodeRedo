var trailingzero = function (n) {
  let zeroCount = 0
  /*  basically we do examples
  we see that the reoccuring pattern is every 5 */
  while (n > 4) {
    n = parseInt(n / 5)
    zeroCount += n
  }
  return zeroCount
}
