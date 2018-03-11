// Implement set of stacks
var Stack = require("../utils/stack");

class SetOfStack {
    /**
     * 
     * @param {Array} array 
     * @param {number} threshold 
     */
    constructor(array, threshold) {
        /**
         * @type {Array<Stack>}
         */
        this.d_stacks = [];
        this.d_threshold = threshold;

        array.forEach((value) => {
            this.push(value);
        });
    }

    push(value) {
        var stack = this.__getCurrentStack();

        if (!stack || stack.size() >= this.d_threshold) {
            // In the case of no current stack
            // Or current stack is over threshold
            // Create a new stack
            stack = new Stack([value]);
            this.d_stacks.push(stack);
        } else {
            stack.push(value);
        }
    }

    pop() {
        return this.popAt(this.d_stacks.length - 1);
    }

    /**
     * 
     * @param {number} index 
     */
    popAt(index) {
        var stack = this.d_stacks[index];

        if (!stack) {
            throw new Error("Stack is empty");
        }

        var value = stack.pop();

        if (stack.size() === 0) {
            this.d_stacks.splice(index, 1);
        }

        return value;
    }

    /**
     * @returns {Stack}
     */
    __getCurrentStack() {
        if (this.d_stacks.length === 0) {
            return null;
        }

        return this.d_stacks[this.d_stacks.length - 1];
    }
}

module.exports = SetOfStack;