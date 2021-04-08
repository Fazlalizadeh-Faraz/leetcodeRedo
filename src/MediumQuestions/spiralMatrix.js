/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let res = []
    while(matrix.length){
        // first row
        res = matrix.length? [...res, ...matrix.shift()]: res;

        // last column
        res = matrix.length && matrix[0].length ? [...res, ...matrix.map(r => r.pop())] : res;

        // last row (reversed)
        res = matrix.length ? [...res, ...matrix.pop().reverse()] : res;

        // first column (reversed)
        res = matrix.length && matrix[0].length ? [...res, ...matrix.map(r => r.shift()).reverse()] : res;
    }
    return res
};