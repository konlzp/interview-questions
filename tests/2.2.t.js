var KToLast = require("../chapter2/2.2");
var LinkedList = require("../utils/linkedList");

describe('KToLast', () => {
    it('get k to the last', () => {
        var linkedList = new LinkedList([1,2,3,4,5,6]);

        expect(KToLast.getKToLast(linkedList, 4)).toBe(3);
    });
});