var PartitionList = require("../chapter2/2.4");
var LinkedList = require("../utils/linkedList");

describe('PartitionList', () => {
    it('partition a list 1', () => {
        var linkedList = new LinkedList([5,7,2,10,4,8,5,19]);

        var newList = PartitionList.partitionList(linkedList, 7);

        expect(newList.traverse()).toEqual([5,4,2,5,7,10,8,19]);
    });

    it('partition a list 2', () => {
        var linkedList = new LinkedList([19,2,1,4,5,2,2,2,2,2]);

        var newList = PartitionList.partitionList(linkedList, 2);

        expect(newList.traverse()).toEqual([1,19,2,4,5,2,2,2,2,2]);
    });
});