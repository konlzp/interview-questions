// Implement a queue
// API: size, push, pop, first, last

class Queue {
    /**
     * 
     * @param {Array} array 
     */
    constructor(array) {
        /**
         * @member {Array} elements
         */
        if (Array.isArray(array)) {
            this.elements = array;
        } else {
            this.elements = [];
        }
    }

    size() {
        return this.elements.length;
    }

    push(value) {
        this.elements.push(value);
    }

    pop() {
        var value = this.elements[0];
        this.elements.splice(0, 1);
        return value;
    }

    first() {
        var length = this.elements.length;
        return length > 0 ? this.elements[0] : null;
    }

    last() {
        var length = this.elements.length;
        return length > 0 ? this.elements[length - 1] : null;
    }
}

module.exports = Queue;