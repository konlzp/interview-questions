var SumLists = require("../chapter2/2.5");
var LinkedList = require("../utils/linkedList");

describe('SumLists', () => {
    var list1, list2;
    beforeEach(() => {
        list1 = new LinkedList([3,4,5]);
        list2 = new LinkedList([6,7,8]);
    });

    it('sum 2 lists', () => {
        expect(SumLists.sumLists(list1, list2)).toEqual(
            new LinkedList([9,1,4,1])
        );
    });

    it('sum 2 lists rev1', () => {
        expect(SumLists.sumListsReverse(list1, list2)).toEqual(
            new LinkedList([1,0,2,3])
        )
    });

    it('sum 2 lists rev2', () => {
        list1 = new LinkedList([1,5,7,9,9,9]);
        list2 = new LinkedList([7,9]);
        
        expect(SumLists.sumListsReverse(list1, list2)).toEqual(
            new LinkedList([1,5,8,0,7,8])
        );
    });
});