// Implement a queue using two stacks
var Stack = require("../utils/stack");

class MyQueue {
    /**
     * 
     * @param {Array} array 
     */
    constructor(array) {
        /**
         * queueStack is the presentation layer that acts like a queue
         * @type {Stack}
         */
        this.d_queueStack = new Stack([]);

        /**
         * stackStack is the data layer that acts as the temp buffer
         * @type {Stack}
         */
        this.d_stackStack = new Stack([]);

        array.forEach((value) => {
            this.enqueue(value);
        });
    }

    enqueue(value) {
        var tempValue;
        while(tempValue = this.d_queueStack.pop()) {
            this.d_stackStack.push(tempValue);
        }

        this.d_stackStack.push(value);

        while(tempValue = this.d_stackStack.pop()) {
            this.d_queueStack.push(tempValue);
        }
    }

    dequeue() {
        return this.d_queueStack.pop();
    }

    top() {
        return this.d_queueStack.top();
    }
}

module.exports = MyQueue;