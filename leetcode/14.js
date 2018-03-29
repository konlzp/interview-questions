/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    var n = strs.length;
    if (!n) {
        return "";
    }
    var results = "";
    var i = 0;
    while (1) {
        var char = isThisCommon(strs, i, n);
        if (!char) {
            return results;
        }
        results += char;
        i++;
    }
};

/**
 * 
 * @param {string[]} strs 
 * @param {number} i 
 */
function isThisCommon(strs, i, n) {
    var ch = strs[0][i];
    if (!ch) {
        return null;
    }

    for (var j = 0; j < n; ++j) {
        if (typeof strs[j][i] === 'undefined' || strs[j][i] !== ch) {
            return null;
        }
    }
    return ch;
}