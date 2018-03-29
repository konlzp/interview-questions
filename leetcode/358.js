/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var rearrangeString = function(s, k) {
    var countMap = createCountMap(s);
    var nextValidPos = {};

    var result = "";
    for (var i = 0; i < s.length; ++i) {
        var char = findNextChar(i, countMap, nextValidPos);
        if (!char) {
            return "";
        }
        nextValidPos[char] = i + k;
        countMap[char] --;
        result += char;
    }
    return result;
};

function createCountMap(s) {
    var countMap = {};
    for (var i = 0; i < s.length; ++i) {
        if (!countMap[s[i]]) {
            countMap[s[i]] = 0;
        }
        countMap[s[i]] ++;
    }
    return countMap;
}

function findNextChar(pos, countMap, nextValidPos) {
    var max = 0;
    var nextChar = null;
    for (var char in countMap) {
        if (countMap[char] > max && !(nextValidPos[char] > pos)) {
            nextChar = char;
            max = countMap[char];
        }
    }

    return nextChar;
}

console.log(rearrangeString("aaadbbcc", 2));