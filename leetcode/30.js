/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    var results = [];
    var wordMap = createWordCountMap(words);

    var wordsLen = words.length;
    if (!wordsLen) {
        return [];
    }
    var wordLength = words[0].length;
    for (var i = 0; i < s.length - wordLength * wordsLen + 1; ++i) {
        var substr = s.slice(i, i + wordsLen * wordLength);
        var wordMapCopy = {};
        Object.assign(wordMapCopy, wordMap);
        for (var j = 0; j < substr.length; j += wordLength) {
            var word = substr.slice(j, j + wordLength);
            if (wordMapCopy[word]) {
                wordMapCopy[word] --;
            } else {
                break;
            }
        }

        if (j === substr.length) {
            results.push(i);
        }
    }

    return results;
};

function createWordCountMap(words) {
    var map = {};
    words.forEach(word => {
        if (!map[word]) {
            map[word] = 0;
        }
        map[word] ++;
    });
    return map;
}

console.log(findSubstring("barfoothefoobarman", ["foo", "bar"]));