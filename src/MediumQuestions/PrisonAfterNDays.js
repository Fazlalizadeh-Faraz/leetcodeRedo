/**
 * @param {number[]} cells
 * @param {number} n
 * @return {number[]}
 */
var prisonAfterNDays = function(cells, N) {
    let tempArry = [...cells];
    let maxIter = 2 * cells.length - 2
    N = N % maxIter === 0 ? maxIter : N % maxIter
    while(N > 0) {
        for(let i = 0; i < cells.length; i++) {
            tempArry[i] = (cells[i-1] === cells[i+1]) ? 1 : 0;
        }
        cells = [...tempArry];
        N--;
    }
    return cells;
};

// or
var prisonAfterNDays = function(cells, N) {
    function getNextDay(cells){
        let arr = new Array(cells.length).fill(0);
        for(let i=1 ; i< cells.length-1 ; i++){
            arr[i] = cells[i-1] === cells[i+1] ? 1 : 0;
        }
        return arr;
    }
    let iter = 2 * cells.length - 2
    N = N % iter === 0 ? iter : N % iter
    for(let i=0 ; i< N ; i++){
        cells = getNextDay(cells);
    }
    return cells;
};