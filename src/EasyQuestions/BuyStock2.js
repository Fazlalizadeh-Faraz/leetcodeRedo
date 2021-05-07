/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let maxprofit = 0;
    
  let minprice = Infinity;
    
  for (let day = 0; day < prices.length; day++) {
      
    minprice = Math.min(minprice, prices[day]);
      
    maxprofit = Math.max(maxprofit, prices[day] -minprice);
  }
  return maxprofit;
};
