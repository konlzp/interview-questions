/**
 * @param {number} n
 * @return {number}
 */
var checkRecord = function(n) {
    var memo = [];
    const M = Math.floor(Math.pow(10, 9)) + 7;
    var sum = checkLPRecord(n, memo, M);
    for (var i = 0; i < n - 1; ++i) {
        sum += (checkLPRecord(i, memo, M) * checkLPRecord(n - 1 - i, memo, M)) % M;
    }
    return sum;
};

function checkLPRecord(n, memo, M) {
    if (memo[n]) {
        return memo[n];
    }
    switch(n) {
        case 0:
            memo[n] = 1;
            break;
        case 1:
            memo[n] = 2;
            break;
        case 2:
            memo[n] = 4;
            break;
        case 3:
            memo[n] = 7;
            break;
        default:
            memo[n] = (2 * checkLPRecord(n - 1, memo, M) - checkLPRecord(n - 4, memo, M)) % M;
            break;
    }
    return memo[n];
}

console.log(checkRecord(100));