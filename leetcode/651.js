/**
 * @param {number} N
 * @return {number}
 */
var maxA = function(N) {
    var results = Array(N + 1).fill(0);
    var buffer = Array(N + 1).fill(0);

    for (var i = 1; i <= N; ++i) {
        // add 'A'
        // ctrl + V
        // ctrl + A -> ctrl + C -> ctrl + V
        var res1 = results[i - 1] + 1;
        var res2 = results[i - 1] + buffer[i - 1];
        var res3 = (results[i - 3] ? results[i - 3] : 0) * 2;
        results[i] = Math.max(res1, res2, res3);
        buffer[i] = Math.max(buffer[i - 1], results[i - 3] ? results[i - 3] : 0);
    }

    console.log(results);
    console.log(buffer);
    return results[N];
};

console.log(maxA(3));
console.log(maxA(7));