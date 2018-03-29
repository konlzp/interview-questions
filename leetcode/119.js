/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    var result = Array(rowIndex).fill(0);

    for (var i = 1; i <= rowIndex + 1; ++i) {
        for (var j = i - 1; j >= 0; --j) {
            if (j === i - 1 || j === 0) {
                result[j] = 1;
            } else {
                result[j] = result[j - 1] + result[j];
            }
        }
    }

    return result;
};

console.log(getRow(5));