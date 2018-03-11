var MinStack = require("../chapter3/3.2");

describe('MinStack', () => {
    it('MinStack min 1', () => {
        var minStack = new MinStack([4,5,3,6,7,9,1,4]);
        expect(minStack.min).toBe(1);
        minStack.pop();
        minStack.pop();
        expect(minStack.min).toBe(3);
    });
});