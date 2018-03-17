/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function(words) {
    var results = [];

    var wordMap = new Map();
    words.forEach((word, index) => {
        wordMap[word] = index + 1;
    });

    for (var i = 0; i < words.length; ++i) {
        var word = words[i];

        for (var j = 0; j <= word.length; ++j) {
            var par1 = word.slice(0, j);
            var par2 = word.slice(j, word.length);
            if (isPalindrome(par1)) {
                var str2 = par2.split("").reverse().join("");
                var index2 = wordMap[str2];
                if (index2 && index2 !== i + 1) {
                    results.push([index2 - 1, i]);
                }
            }
            if (par2.length > 0 && isPalindrome(par2)) {
                str2 = par1.split("").reverse().join("");
                var index2 = wordMap[str2];
                if (index2 && index2 !== i + 1) {
                    results.push([i, index2 - 1]);
                }
            }
        }
    }

    return results;
};

/**
 * 
 * @param {string} str 
 */
function isPalindrome(str) {
    return str === str.split("").reverse().join("");
}

console.log(palindromePairs(["a", ""]));