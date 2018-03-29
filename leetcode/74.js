/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    var n = matrix.length;
    if (n === 0) {
        return false;
    }
    var m = matrix[0].length;
    var low = 0, high = n * m - 1;
    return searchMatrixRecursive(matrix, target, low, high, m);
};

function searchMatrixRecursive(matrix, target, low, high, m) {
    if (low > high) {
        return false;
    }
    var mid = Math.floor((low + high) / 2);

    var midCoord = numToCoord(mid, m);
    if (matrix[midCoord[0]][midCoord[1]] > target) {
        return searchMatrixRecursive(matrix, target, low, mid - 1, m);
    } else if (matrix[midCoord[0]][midCoord[1]] === target) {
        return true;
    } else {
        return searchMatrixRecursive(matrix, target, mid + 1, high, m);
    }
}

function numToCoord(num, m) {
    return [Math.floor(num / m), num % m];
}

// console.log(searchMatrix([
//     [1,   3,  5,  7],
//     [10, 11, 16, 20],
//     [23, 30, 34, 50]
//   ], 4));

console.log(searchMatrix([[1,1]], 2))