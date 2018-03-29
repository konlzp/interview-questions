/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1) {
        return s;
    }

    var result = "";
    for (var i = 0; i < numRows; ++i) {
        if (i === numRows - 1) {
            for (var j = i; j < s.length; j += 2 * i) {
                result += s[j];
            }
            continue;
        }
        if (i === 0) {
            for (var j = i; j < s.length; j += 2 * (numRows - 1 - i)) {
                result += s[j];
            }
            continue;
        }

        var flag = true;
        for (var j = i; j < s.length;) {
            result += s[j];
            if (flag) {
                j += 2 * (numRows - 1 - i);
            } else {
                j += 2 * i;
            }
            flag = !flag;
        }
    }
    return result;
};

console.log(convert("PAYPALISHIRING", 3));