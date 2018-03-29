/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} positions
 * @return {number[]}
 */
var numIslands2 = function(m, n, positions) {
    var islands = [];
    var results = [];

    positions.forEach((position) => {
        var connectedIslands = [];
        var x = position[0];
        var y = position[1];
        var newIsland = [coordToInt(x, y, m, n)];

        [[x - 1, y], [x + 1, y], [x, y - 1], [x, y + 1]].forEach((neighbor) => {
            if ((neighbor = coordToInt(neighbor[0], neighbor[1], m, n)) < 0) {
                return ;
            }

            var neighborIsland;
            if (neighborIsland = searchIsland(islands, neighbor)) {
                newIsland = mergeIsland(newIsland, neighborIsland);
            }
        });

        islands.push(newIsland);
        results.push(islands.length);
    });

    return results;
};

function coordToInt(x, y, m, n) {
    if (x < 0 || x >= m || y < 0 || y >= n) {
        return -1;
    }
    return x * n + y;
}

/**
 * 
 * @param {number[][]} islands 
 * @param {*} int 
 */
function searchIsland(islands, int) {
    for (var i = 0; i < islands.length; ++i) {
        var island = islands[i];
        if (binarySearch(island, int) !== -1) {
            return islands.splice(i, 1)[0];
        }
    }
    return null;
}

/**
 * @param {number[]} arr 
 * @param {*} ele 
 */
function binarySearch(arr, ele) {
    var left = 0, right = arr.length - 1;
    return binarySearchRecursive(arr, ele, left, right);
}

function binarySearchRecursive(arr, ele, left, right) {
    if (left > right) {
        return -1;
    }
    var mid = Math.floor((left + right) / 2);
    if (arr[mid] === ele) {
        return mid;
    }
    if (arr[mid] > ele) {
        return binarySearchRecursive(arr, ele, left, mid - 1);
    }
    return binarySearchRecursive(arr, ele, mid + 1, right);
}

function mergeIsland(island1, island2) {
    var result = Array(island1.length + island2.length).fill(0);
    var i = 0, j = 0;
    while (i < island1.length || j < island2.length) {
        if (typeof island1[i] !== 'undefined' && (island1[i] < island2[j] || typeof island2[j] === 'undefined')) {
            result[i + j] = island1[i];
            ++i;
        } else {
            result[i + j] = island2[j];
            ++j;
        }
    }

    return result;
}

console.log(numIslands2(3,
    6,
    [[2,2],[2,1],[1,3],[0,4]]));