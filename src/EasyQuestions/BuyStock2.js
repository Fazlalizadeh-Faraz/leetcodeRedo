/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxprofit = 0

  let minprice = Infinity

  for (let day = 0; day < prices.length; day++) {
    // consatntly check to see if our buy in price is
    // the lowest
    minprice = Math.min(minprice, prices[day])
    /* we make sure to exit with the maximum profit */
    maxprofit = Math.max(maxprofit, prices[day] - minprice)
  }
  return maxprofit
}
