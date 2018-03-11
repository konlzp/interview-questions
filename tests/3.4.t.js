var MyQueue = require("../chapter3/3.4");

describe('MyQueue', () => {
    it('MyQueue should behave', () => {
        var myQueue = new MyQueue([1,2,3,4,5]);

        expect(myQueue.dequeue()).toBe(1);
        expect(myQueue.dequeue()).toBe(2);
        myQueue.enqueue(6);
        expect(myQueue.dequeue()).toBe(3);
    });
});