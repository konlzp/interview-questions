/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    return word1.length + word2.length - longestCommonSequence(word1, word2) * 2;
};

function longestCommonSequence(word1, word2) {
    var results = [];
    for (var i = 0; i < word1.length; ++i) {
        results.push([]);
        for (var j = 0; j < word2.length; ++j) {
            if (word1[i] === word2[j]) {
                results[i][j] = safeAccess(results, i - 1, j - 1) + 1;
            } else {
                results[i][j] = Math.max(safeAccess(results, i - 1, j), safeAccess(results, i, j - 1));
            }
        }
    }
    return results[word1.length - 1][word2.length - 1];
}

function safeAccess(arr, i, j) {
    if (!arr[i] || !arr[i][j]) {
        return 0;
    }
    return arr[i][j];
}

console.log(minDistance("dinitrophenylhydrazine",
"benzalphenylhydrazone"));