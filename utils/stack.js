
class Stack {
    /**
     * 
     * @param {Array} array 
     */
    constructor(array) {
        this.elements = array;
    }

    pop() {
        if (this.isEmpty()) {
            return null;
        }

        var top = this.top();
        this.elements.splice(this.size() - 1, 1);
        return top;
    }

    push(value) {
        this.elements.push(value);
    }

    top() {
        if (this.isEmpty()) {
            return null;
        }
        return this.elements[this.size() - 1];
    }

    isEmpty() {
        return (this.size() === 0);
    }

    size() {
        return this.elements.length;
    }
}

module.exports = Stack;