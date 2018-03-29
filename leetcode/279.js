var memo = [];

/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    var k = Math.floor(Math.sqrt(n));

    var tempMin = n;
    for (var i = k; i > 0; --i) {
        var next = n - i * i;
        if (typeof memo[next] === 'undefined') {
            memo[next] = numSquares(next);
        }
        tempMin = Math.min(tempMin, 1 + memo[next]);
    }

    return tempMin;
};

console.log(numSquares(13));