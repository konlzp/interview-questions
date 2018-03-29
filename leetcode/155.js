/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = [];
    this.mins = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x);
    if (this.mins.length === 0 || this.mins[this.mins.length - 1] >= x) {
        this.mins.push(x);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    var popOut = this.stack.pop();
    if (popOut === this.mins[this.mins.length - 1]) {
        this.mins.pop();
    }
    return popOut;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.mins[this.mins.length - 1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */