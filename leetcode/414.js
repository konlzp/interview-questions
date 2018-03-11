/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    /**
     * @type {Array<3>}
     */
    var maxQueue = new MaxQueue(nums);
    return maxQueue.getThirdMax();
};

class MaxQueue {
    constructor(array) {
        this.elements = [];
        array.forEach((value) => {
            this.push(value);
        })
        console.log(this.elements);
    }

    push(value) {
        if (this.elements.length === 0) {
            this.elements.push(value);
            return;
        }

        if (this.elements.indexOf(value) !== -1) {
            return ;
        }

        for (var i = 0; i < this.elements.length; ++i) {
            if (value < this.elements[i]) {
                this.elements.splice(i, 0, value);
                if (this.elements.length > 3) {
                    this.elements.shift();
                }
                return;
            }
        }

        this.elements.push(value);
        if (this.elements.length > 3) {
            this.elements.shift();
        }
    }

    getThirdMax() {
        if (!this.elements.length) {
            return null;
        }

        if (this.elements.length < 3) {
            return this.elements[this.elements.length - 1];
        }

        return this.elements[0];
    }
}