/**
 * @param {string} expression
 * @return {string}
 */
var parseTernary = function(expression) {
    return parseTernaryHelper(expression, 0);
};

function parseTernaryHelper(expression, index) {
    switch(expression[index]) {
        case 'T':
            if (expression[index + 1] !== '?') {
                return 'T';
            }
            return parseTernaryHelper(expression, index + 2);
        case 'F': {
            var queue = [];
            if (expression[++index] !== '?') {
                return 'F';
            }
            while(index < expression.length) {
                if (expression[index] === '?') {
                    queue.push('?');
                } else if (expression[index] === ':') {
                    queue.pop();
                }
                index++;
                if (queue.length === 0) {
                    break;
                }
            }
            if (index >= expression.length) {
                // No valid result after 'F', 'F' itself is the result
                return 'F';
            }
            return parseTernaryHelper(expression, index);
        }
        default:
            return expression[index];
    }
}

console.log(parseTernary("F?1:T?4:5"));