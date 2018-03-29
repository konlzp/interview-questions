/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    var mapping = new Map();
    var reverseMapping = new Map();
    if (pattern.length !== str.split(" ").length) {
        return false;
    }
    return str.split(" ").every((word, index) => {
        if (!mapping[pattern[index]] && !reverseMapping[word]) {
            mapping[pattern[index]] = word;
            reverseMapping[word] = pattern[index];
        } else if (mapping[pattern[index]] !== word || reverseMapping[word] !== pattern[index]) {
            return false;
        }
        return true;
    })
};

console.log(wordPattern("abba", "dog dog dog dog"));