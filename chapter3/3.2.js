var Stack = require("../utils/stack");

class MinStack {
    /**
     * 
     * @param {Array} array 
     */
    constructor(array) {
        this.stack = new Stack([]);
        this.minStack = new Stack([]);
        this.min = null;
        array.forEach((value) => {
            this.push(value);
        });
    }

    push(value) {
        this.stack.push(value);
        if (!this.min || this.min > value) {
            this.minStack.push(value);
            this.min = value;
        }
    }

    pop() {
        var value = this.stack.pop();
        if (this.min === value) {
            this.minStack.pop();
            this.min = this.minStack.top();
        }
        return value;
    }

    top() {
        return this.stack.top();
    }
}

module.exports = MinStack;