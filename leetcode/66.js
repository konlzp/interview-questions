/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var carry = 1;
    for (var i = digits.length - 1; i >= 0; --i) {
        if (!carry) {
            return digits;
        }
        var result = digits[i] + carry;
        digits[i] = result % 10;
        carry = Math.floor(result / 10);
    }
    if (carry) {
        digits.unshift(1);
    }
    return digits;
};