/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    var n = board.length;
    if (n === 0) {
        return ;
    }
    var m = board[0].length;
    for (var i = 0; i < n; ++i) {
        for (var j = 0; j < m; ++j) {
            var liveNeighbors = findAliveNeighbors(i, j, board, n, m);
            if (board[i][j]) {
                if (liveNeighbors === 2 || liveNeighbors === 3) {
                    board[i][j] += 2;
                }
            } else {
                if (liveNeighbors === 3) {
                    board[i][j] += 2;
                }
            }
        }
    }

    for (var i = 0; i < n; ++i) {
        for (var j = 0; j < m; ++j) {
            board[i][j]  = board[i][j] >> 1;
        }
    }
};

function findAliveNeighbors(x, y, board, n, m) {
    var neighbors = [];
    for (var i = x - 1; i <= x + 1; ++i) {
        for (var j = y - 1; j <= y + 1; ++j) {
            if (i >=0 && i <= n - 1 && j >= 0 && j <= m - 1 &&
                (i !== x || j !== y)) {
                neighbors.push([i, j]);
            }
        }
    }

    var count = 0;
    neighbors.forEach((neighbor) => {
        if (board[neighbor[0]][neighbor[1]] & 1) {
            count ++;
        }
    });
    return count;
}

var board = [
    [0, 0, 1],
    [1, 1, 0],
    [1, 0, 1]
];

board = [[]];

gameOfLife(board);

console.log(board);