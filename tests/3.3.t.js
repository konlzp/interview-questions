var SetOfStack = require("../chapter3/3.3");

describe('SetOfStack', () => {
    it('SetOfStack should behave like this', () => {
        var setOfStack = new SetOfStack([1,2,3,4,5,6,7,8], 2);

        expect(setOfStack.pop()).toBe(8);
        expect(setOfStack.pop()).toBe(7);
        expect(setOfStack.pop()).toBe(6);
        expect(setOfStack.popAt(1)).toBe(4);
        expect(setOfStack.popAt(1)).toBe(3);
        expect(setOfStack.popAt(1)).toBe(5);
    });
});