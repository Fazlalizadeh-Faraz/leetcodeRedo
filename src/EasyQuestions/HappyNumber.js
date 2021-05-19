const isHappy = (n) => {
  let map = {}
  let num
  // allows to find if its repeating or not
  while (!map[n]) {
    map[n] = true

    num = 0
    // we squaring each digit and adding
    while (n > 0) {
      num += (n % 10) * (n % 10)
      n = Math.floor(n / 10)
    }
    if (num === 1) {
      return true
    }
    n = num
  }
  return false
}
