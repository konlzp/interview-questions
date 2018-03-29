/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    var n = grid.length;
    if (!n) {
        return 0;
    }
    var m = grid[0].length;
    var islandCount = 0;
    
    var currLand;
    while (currLand = findNextUnvisitedLand(grid, n, m)) {
        expandToIsland(grid, currLand, n, m);
        islandCount ++;
    }

    return islandCount;
};

/**
 * 
 * @param {char[][]} grid 
 * @param {*} currLand 
 */
function expandToIsland(grid, currLand, n, m) {
    var queue = [];
    while (currLand) {
        var x = currLand[0], y = currLand[1];
        grid[x][y] = '2';
        [[x - 1, y], [x + 1, y], [x, y - 1], [x, y + 1]].forEach((coord) => {
            if (safeAccess(grid, coord[0], coord[1], n, m) === '1') {
                queue.push(coord);
            }
        })
        currLand = queue.pop();
    }
}

function safeAccess(grid, x, y, n, m) {
    if (x < 0 || x >= n || y < 0 || y >= m) {
        return null;
    }
    return grid[x][y];
}

function findNextUnvisitedLand(grid, n, m) {
    for (var i = 0; i < n; ++i) {
        for (var j = 0; j < m; ++j) {
            if (grid[i][j] === '1') {
                return [i, j];
            }
        }
    }
    return null;
}

console.log(numIslands([
    ['1', '1', '0'],
    ['1', '0', '1'],
    ['0', '1', '0']
]));