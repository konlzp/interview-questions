var Queue = require("./queue");

class KQueue extends Queue {
    constructor(array, size) {
        if (array.length > size) {
            array = array.slice(array.length - size);
        }
        super(array);
        /**
         * @type {number}
         */
        this.size = size;
    }

    push(value) {
        this.elements.push(value);

        if (this.elements.length > this.size) {
            return this.elements.shift();
        }
    }
}

module.exports = KQueue;