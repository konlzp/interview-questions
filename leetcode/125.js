/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    for (var i = 0; i < Math.floor(s.length / 2); ++i) {
        if (s[i] !== s[s.length - i - 1]) {
            return false;
        }
    }
    return true;
};

console.log(isPalindrome("abcda"));
console.log(isPalindrome("abba"));