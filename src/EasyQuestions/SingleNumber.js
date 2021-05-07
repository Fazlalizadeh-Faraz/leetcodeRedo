var singleNumber = function (nums) {
  let hash = {}
  for (let val of nums) {
    hash[val] ? delete hash[val] : (hash[val] = 1)
  }
  return Object.keys(hash)[0]
}
