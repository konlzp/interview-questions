/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    if (n <= 0) {
        return [[]];
    }

    var result = [];
    for (var i = 0; i < n; ++i) {
        result.push(Array(n).fill(0));
    }

    var curr = [0, 0];
    var directions = [
        goRight,
        goDown,
        goLeft,
        goUp
    ];
    var curDir = 0;
    var count = 1;

    while(1) {
        result[curr[0]][curr[1]] = count++;

        var i;
        for (i = 0; i < 4; ++i) {
            var next = directions[curDir](curr[0], curr[1]);
            if (canGo(next[0], next[1], result, n)) {
                curr = next;
                break;
            }
            curDir = (curDir + 1) % 4;
        }

        if (4 === i) {
            break;
        }
    }

    return result;
};

function canGo(x, y, result, n) {
    return x >= 0 && y >= 0 && x <= n - 1 && y <= n - 1 &&
        result[x][y] === 0;
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

console.log(generateMatrix(0));