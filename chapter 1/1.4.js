// Check if string is a permutation of a palindrome

function buildCharHashmap(str) {
    var map = {};

    for (var i in str) {
        var char = str[i];
        if (!map[char]) {
            map[char] = 0;
        }
        ++map[char];
    }

    return map;
}

class checkPalindrome {
    static checkPalindrome(str) {
        if (typeof str !== 'string') {
            return false;
        }

        var hashMap = buildCharHashmap(str);
        var hasCenterElement = false;

        for (var char in hashMap) {
            if (hashMap[char] % 2 === 1) {
                if (!hasCenterElement) {
                    hasCenterElement = true;
                } else {
                    return false;
                }
            }
        }

        return true;
    }
}

module.exports = checkPalindrome;