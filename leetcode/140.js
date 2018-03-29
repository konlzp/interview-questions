/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    var wordMap = convertArrayToWordMap(wordDict);
    var wordLengths = Object.keys(wordMap).map(key => parseInt(key));
    var results = Array(s.length + 1);

    results[0] = [['']];

    for (var i = 1; i <= s.length; ++i) {
        results[i] = [];
        wordLengths.forEach(wordLen => {
            if (i - wordLen >= 0) {
                var word = s.slice(i - wordLen, i);
                if (wordMap['' + wordLen].indexOf(word) !== -1) {
                    results[i] = results[i].concat(results[i - wordLen].map(words => {
                        return words.concat([word]);
                    }));
                }
            }
        });
    }

    if (results[s.length].length < 1) {
        return [];
    }

    return results[s.length].map((ele) => {
        return ele.join(" ").slice(1);
    });
};

/**
 * Convert a string array to a map keyed by their length
 * @param {string[]} wordDict 
 */
function convertArrayToWordMap(wordDict) {
    var map = {};
    wordDict.forEach(word => {
        var length = word.length;
        if (!map[length]) {
            map[length] = [];
        }
        map[length].push(word);
    });
    return map;
}

console.log(wordBreak("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"]));