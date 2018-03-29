/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    var results = [];
    for (var i = 1; i <= numRows; ++i) {
        generateRowK(results, i);
    }
    return results;
};

/**
 * 
 * @param {number[][]} results 
 * @param {number} k 
 */
function generateRowK(results, k) {
    var prevRow = results[k - 2];
    var kRow = [];
    for (var i = 0; i < k; ++i) {
        if (i === 0 || i === k - 1) {
            kRow.push(1);
        } else {
            kRow.push(prevRow[i - 1] + prevRow[i]);
        }
    } 

    results.push(kRow);
}