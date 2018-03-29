/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    var n = matrix.length;
    if (!n) {
        return ;
    }
    var m = matrix[0].length;

    this.sum = [];
    for (var i = 0; i < n; ++i) {
        this.sum.push(Array(m).fill(0));
    }

    for (var i = n - 1; i >= 0; --i) {
        for (var j = m - 1; j >= 0; --j) {
            this.sum[i][j] = safeAccess(this.sum, i + 1, j) +
                safeAccess(this.sum, i, j + 1) - safeAccess(this.sum, i + 1, j + 1) +
                matrix[i][j];
        }
    }
};

function safeAccess(matrix, i, j) {
    if (i < 0 || j < 0 || i >= matrix.length || j >= matrix[0].length) {
        return 0;
    }
    return matrix[i][j];
}

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    return safeAccess(this.sum, row1, col1) - safeAccess(this.sum, row1, col2 + 1) -
        safeAccess(this.sum, row2 + 1, col1) + safeAccess(this.sum, row2 + 1, col2 + 1);
};

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = Object.create(NumMatrix).createNew(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */