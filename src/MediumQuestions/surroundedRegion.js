/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    if(!board || board.length === 0 || board[0].length ===0){
        return board
    }
    const rows = board.length
    const cols = board[0].length

    for(let row = 0; row < rows; row++ ){
        if(board[row][0] === 'O') {
            dfs(board, rows, cols, row, 0);
        }
        if(board[row][cols - 1] === 'O') {
            dfs(board, rows, cols, row, cols -1);
        }
    }

    for(let col = 0; col < cols; col++) {
        if(board[0][col] === 'O') {
            dfs(board, rows, cols, 0, col);
        }
        if(board[rows - 1][col] === 'O') {
            dfs(board, rows,cols ,rows - 1, col);
        }
    }

    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < cols; j++) {
            if( board[i][j] === 'O') {
                board[i][j] = 'X';
            }else if (board[i][j] === 1) {
                board[i][j] = 'O';
            }
        }
    }
    return board

};

const dfs = (board, rows,cols, row, col) => {
    if(row< 0 || row >= rows || col < 0 || col >= cols){
        return;
    }
    if(board[row][col] ===1 || board[row][col] ==='X'){
        return;
    }
    board[row][col] = 1;
    dfs(baord, rows, cols, row -1 , col)
    dfs(baord, rows, cols, row +1 , col)
    dfs(baord, rows, cols, row  , col +1)
    dfs(baord, rows, cols, row  , col -1)
}

