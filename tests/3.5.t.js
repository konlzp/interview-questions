var sortStack = require("../chapter3/3.5");
var Stack = require("../utils/stack");

describe('sort a stack', () => {
    it('sort stack 1', () => {
        var stack = new Stack([3,5,1,2,6]);

        stack = sortStack(stack);
        expect(stack.pop()).toBe(1);
        expect(stack.pop()).toBe(2);
        expect(stack.pop()).toBe(3);
        expect(stack.pop()).toBe(5);
        expect(stack.pop()).toBe(6);
    });

    it('sort stack 2', () => {
        var stack = new Stack([7,2,1,3,5,1,2,6]);

        stack = sortStack(stack);
        expect(stack.pop()).toBe(1);
        expect(stack.pop()).toBe(1);
        expect(stack.pop()).toBe(2);
        expect(stack.pop()).toBe(2);
        expect(stack.pop()).toBe(3);
        expect(stack.pop()).toBe(5);
        expect(stack.pop()).toBe(6);
        expect(stack.pop()).toBe(7);
    });
});