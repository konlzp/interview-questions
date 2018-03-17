/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var repeatedStringMatch = function(A, B) {
    var numOfA = Math.ceil(B.length / A.length) + 1;

    var newA = "";
    for (var i = 0; i < numOfA; ++i) {
        newA += A;
    }

    for (var i = 0; i < numOfA; ++i) {
        if (newA.slice(0, (numOfA - i) * A.length).indexOf(B) === -1) {
            if (i === 0) {
                return -1;
            } else {
                return numOfA - i + 1;
            }
        }
    }
    return 1;
};

console.log(repeatedStringMatch("abcd", "cdabcdab"));