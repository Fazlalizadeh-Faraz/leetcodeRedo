/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const dp = Array(s.length + 1).fill(false);
    dp[0] = true;

    for (let end = 1; end <= s.length; end++) {
        console.log("outter loop", s[end])
        for (let start = 0; start < end; start++) {
            console.log("inner loop",s[end],"  ", s[start])
            console.log("Substring ", s.slice(start, end))
            if (dp[start] && wordDict.includes(s.slice(start, end))) {
                dp[end] = true;
                break;
            }
        }
    }
    return dp[s.length];
};