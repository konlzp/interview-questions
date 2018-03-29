/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    var results = [];
    generateParens(n, 0, results, []);

    return results;
};

function generateParens(left, right, results, string) {
    if (left === 0 && right === 0) {
        results.push(string.join(''));
    }

    if (left > 0) {
        string.push('(');
        generateParens(left - 1, right + 1, results, string);
        string.pop();
    }
    if (right > 0) {
        string.push(')');
        generateParens(left, right - 1, results, string);
        string.pop();
    }
}

console.log(generateParenthesis(3));