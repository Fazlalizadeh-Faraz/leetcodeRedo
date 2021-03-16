/*basically the fib solutions*/

var climbStairs = function(n) {
    let dp = new Array(n+1); // size is n+1 because array is zero-indexed
    dp[0] = 1;
    dp[1] = 1;
    dp[2] = 2;

    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[n];
};