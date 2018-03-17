/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function(s) {
    var length = s.length;
    var revS = s.split('').reverse().join('');

    var i;
    for (i = 0; i < revS.length; ++i) {
        var prefix = s.slice(0, length - i);
        var suffix = revS.slice(i, length);

        if (prefix === suffix) {
            break;
        }
    }

    return revS.slice(0, i) + s;
};

console.log(shortestPalindrome("aacecaaa"));