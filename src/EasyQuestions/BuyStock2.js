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
const maxProfit = (prices) => {
  // Start with nothing and take every profitable opportunity from time travel
  let profit = 0
  // Start from the second day (because that is the first day you could sell)
  for (let i = 1; i < prices.length; i++) {
    // Our Delorean only goes back 1 day, but that is all we need
    const [priceYesterday, priceToday] = [prices[i - 1], prices[i]]
    // Whenever there is profit, engage that Flux Capacitor!
    if (priceYesterday < priceToday) profit += priceToday - priceYesterday
    // Buy yesterday; sell today
  }
  // Take every Monday off!
  return profit
  // Time travel trading makes every weekend is a three-day weekend!
}
