const VOWELS = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    s = s.split('');
    var vowelIndex = [];
    for (var i = 0; i < s.length; ++i) {
        if (VOWELS.indexOf(s[i]) !== -1) {
            vowelIndex.push(i);
        }
    }

    var length = vowelIndex.length;
    for (var i = 0; i < Math.floor(length / 2); ++i) {
        var temp = s[vowelIndex[i]];
        s[vowelIndex[i]] = s[vowelIndex[length - i - 1]];
        s[vowelIndex[length - i - 1]] = temp;
    }

    return s.join('');
};

console.log(reverseVowels("leetcode"));
console.log(reverseVowels("hello"));