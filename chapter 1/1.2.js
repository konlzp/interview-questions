// Check if two strings are permutations for each other

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

class checkPerm {
    static checkPermutation(str1, str2) {
        if (str1.length !== str2.length) {
            return false;
        }

        var hashMap1 = buildCharHashmap(str1);
        var hashMap2 = buildCharHashmap(str2);

        for (var char in hashMap1) {
            if (hashMap1[char] !== hashMap2[char]) {
                return false;
            }
        }
        return true;
    }
}

module.exports = checkPerm;