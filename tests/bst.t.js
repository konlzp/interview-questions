var BST = require("../utils/bst");

describe('BST', () => {
    it('min BST', () => {
        var bst = new BST([1,5,2,6,3,7], true);

        expect(bst.getInOrder()).toEqual([1,2,3,5,6,7]);
    });

    it('normal BST', () => {
        var bst = new BST([1,5,2,6,3,7], false);

        expect(bst.getInOrder()).toEqual([1,2,3,5,6,7]);
    });

    it('remove node from BST', () => {
        var bst = new BST([1,5,2,6,3,7], true);

        bst.removeValue(2);
        expect(bst.getInOrder()).toEqual([1,3,5,6,7]);
        bst.removeValue(1);
        expect(bst.getInOrder()).toEqual([3,5,6,7]);
        bst.removeValue(3);
        expect(bst.getInOrder()).toEqual([5,6,7]);
    });
});