/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    var realLen = 0;
    var count = 0;
    var currChar = null;
    chars.push("end");
    for (var i = 0; i < chars.length; ++i) {
        if (!currChar) {
            currChar = chars[i];
            count = 1;
        } else if (currChar !== chars[i]) {
            chars[realLen++] = currChar;
            if (count >= 2) {
                (count + "").split("").forEach((char) => {
                    chars[realLen++] = char;
                });
            }
            count = 1;
            currChar = chars[i];
        } else {
            count ++;
        }
    }
    return realLen;
};

var chars = ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'b', 'c', 'c'];
var length = compress(chars);
console.log(chars.slice(0, length));