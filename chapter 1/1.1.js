// Check if a string consists of unique characters
// without using additional data structures

class isUnique {
    static isUnique(str) {
        if (!typeof str === "string") {
            return false;
        }

        var strLen = str.length;
        for (var i = 0; i < strLen; ++i) {
            var char = str[i];
            for (var j = i + 1; j < strLen; ++j) {
                if (char === str[j]) {
                    return false;
                }
            }
        }

        return true;
    }
}

module.exports = isUnique;