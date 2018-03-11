// Sort a stack. using only an additional temp stack to sort a stack

var Stack = require("../utils/stack");

/**
 * @param {Stack} stack 
 */
function sortStack(stack) {
    /**
     * tempStack should always be sorted,
     * in a reverted order from the intended order
     * @type {Stack}
     */
    var tempStack = new Stack([]);

    var value;
    while(value = stack.pop()) {
        insertToStack(value, tempStack, stack);
    }

    // By now, the mainStack should be empty
    // 
    while((value = tempStack.pop()) !== null) {
        stack.push(value);
    }

    return stack;
}

/**
 * 
 * @param {number} value 
 * @param {Stack} sortedStack 
 * @param {Stack} mainStack 
 */
function insertToStack(value, sortedStack, mainStack) {
    var stackTop = sortedStack.top();
    var movedCount = 0;

    // Find the correct position to insert the value
    // while move the values above to the mainStack
    while (stackTop !== null && stackTop > value) {
        movedCount ++;
        mainStack.push(sortedStack.pop());
        stackTop = sortedStack.top();
    }

    // Insert the value
    sortedStack.push(value);

    // Push all the values back to the sortedStack
    for (var i = 0; i < movedCount; ++i) {
        sortedStack.push(mainStack.pop());
    }
}

module.exports = sortStack;