/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
    var results = Array(s.length + 1).fill(0);
    var map = {};
    for (var i = 0; i < s.length; ++i) {
        var ch = s[i];
        var tempRes = results[i] + 1
        if (!map[ch]) {
            results[i + 1] = tempRes;
            map[ch] = [i];
        } else {
            map[ch].forEach(index => {
                if (results[index] < temp - 1 && isPalindrome(s, index, i)) {
                    tempRes = results[index] + 1;
                }
            });
            map[ch].push(i);
            results[i + 1] = tempRes;
        }
    }
    return results[s.length] - 1;
};

function isPalindrome(s, start, end) {
    for (var i = 0; i <= Math.floor((end - start) / 2); ++i) {
        if (s[start + i] !== s[end - i]) {
            return false;
        }
    }
    return true;
}