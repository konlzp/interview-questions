/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    var n = matrix.length;
    if (!n) {
        return false;
    }
    var m = matrix[0].length;

    var coord = [n - 1, 0];
    while (coord[0] >= 0 && coord[1] < m) {
        if (matrix[coord[0]][coord[1]] === target) {
            return true;
        } else if (matrix[coord[0]][coord[1]] > target) {
            coord[0] -= 1;
        } else {
            coord[1] += 1;
        }
    }

    return false;
};

console.log(searchMatrix([
    [1,   4,  7, 11, 15],
    [2,   5,  8, 12, 19],
    [3,   6,  9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
  ], 20));