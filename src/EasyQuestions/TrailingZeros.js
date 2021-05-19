var trailingZeroes = function (n) {
  let zeroCount = 0
  while (n > 4) {
    n = parseInt(n / 5)
    zeroCount += n
  }
  return zeroCount
}
