// Check if two strings are one or zero edit away: remove/insert/replace

class OneAway {
    static oneAway(str1, str2) {
        var strLen1 = str1.length;
        var strLen2 = str2.length;

        if (strLen1 === strLen2) {
            return isReplaceOrEqual(str1, str2);
        }
        else {
            return isInsert(strLen1 > strLen2 ? str1 : str2,
                strLen1 < strLen2 ? str1 : str2);
        }
    }
}

function isReplaceOrEqual(str1, str2) {
    var charReplaced = false;
    for (var i = 0; i < str1.length; ++i) {
        if (str1[i] !== str2[i]) {
            if (charReplaced) {
                return false;
            } else {
                charReplaced = true;
            }
        }
    }
    return true;
}

function isInsert(longStr, shortStr) {
    if (longStr.length > shortStr.length + 1) {
        return false;
    }

    var longSkipped = false;
    for (var shortInd = 0, longInd = 0; shortInd < shortStr.length;
        ++shortStr) {
        if (longStr[longInd] !== shortStr[shortInd]) {
            if (longSkipped) {
                return false;
            } else {
                longSkipped = true;
                longInd ++;
            }
        }
    }

    return true;
}

module.exports = OneAway;