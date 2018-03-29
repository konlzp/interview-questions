/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    var n = grid.length;
    if (!n) {
        return 0;
    }
    var m = grid[0].length;

    var count = 0;
    for (var i = 0; i < n; ++i) {
        for (var j = 0; j < m; ++j) {
            if (grid[i][j]) {
                count += countPerimeter(grid, i, j, n, m);
            }
        }
    }

    return count;
};

function countPerimeter(grid, x, y, n, m) {
    var count = 0;
    [[x + 1, y], [x - 1, y], [x, y - 1], [x, y + 1]].forEach((coord) => {
        if (!isSafe(coord[0], coord[1], n, m)) {
            count ++;
            return;
        }
        if (!grid[coord[0]][coord[1]]) {
            count ++;
        }
    });

    return count;
}

function isSafe(x, y, n, m) {
    return x >= 0 && x < n && y >= 0 && y < m;
}

console.log(islandPerimeter([[0,1,0,0],
    [1,1,1,0],
    [0,1,0,0],
    [1,1,0,0]]));