/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    var results = [];
    for (var i = 0; i <= word1.length; ++i) {
        results.push([]);
        for (var j = 0; j <= word2.length; ++j) {
            if (i === 0) {
                results[i][j] = j;
            } else if (j === 0) {
                results[i][j] = i;
            } else {
                results[i][j] = 0;
            }
        }
    }

    for (var i = 1; i <= word1.length; ++i) {
        for (var j = 1; j <= word2.length; ++j) {
            if (word1[i - 1] === word2[j - 1]) {
                results[i][j] = results[i - 1][j - 1];
            } else {
                results[i][j] = Math.min(results[i - 1][j - 1], results[i][j - 1], results[i - 1][j]) + 1;
            }
        }
    }

    return results[word1.length][word2.length];
};

console.log(minDistance("ab", "bc"));