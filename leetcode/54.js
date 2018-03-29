/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    var n = matrix.length;
    if (!n) {
        return [];
    }
    var m = matrix[0].length;

    var results = [];
    var curr = [0, 0];
    var directions = [
        goRight,
        goDown,
        goLeft,
        goUp
    ];
    var curDir = 0;

    while(1) {
        results.push(matrix[curr[0]][curr[1]]);

        var i;
        for (i = 0; i < 4; ++i) {
            var next = directions[curDir](curr[0], curr[1]);
            if (canGo(next[0], next[1], results, matrix, n, m)) {
                curr = next;
                break;
            }
            curDir = (curDir + 1) % 4;
        }

        if (4 === i) {
            break;
        }
    }

    return results;
};

function canGo(x, y, results, matrix, n, m) {
    return x >= 0 && y >= 0 && x <= n - 1 && y <= m - 1 &&
        results.indexOf(matrix[x][y]) === -1;
}

function goUp(x, y) {
    return [x - 1, y];
}

function goDown(x, y) {
    return [x + 1, y];
}

function goLeft(x, y) {
    return [x, y - 1];
}

function goRight(x, y) {
    return [x, y + 1];
}

console.log(spiralOrder([
    [ 1, 2, 3, 4 ],
    [ 5, 6, 7, 8 ],
    [ 9, 10, 11, 12 ],
    [13, 14, 15, 16]
]));