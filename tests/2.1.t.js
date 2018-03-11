var LinkedList = require("../utils/linkedlist");
var RemoveDups = require("../chapter2/2.1")

describe("RemoveDups", function() {
    it("remove dups 1", function() {
        var linkedList = new LinkedList([1,2,3,2,3,4]);

        linkedList = RemoveDups.removeDups(linkedList);
        expect(linkedList.traverse()).toEqual([1,2,3,4]);
    });

    it("remove dups without buffer", function() {
        var linkedList = new LinkedList([1,2,3,2,3,4]);

        linkedList = RemoveDups.removeDupsWithoutBuffer(linkedList);
        expect(linkedList.traverse()).toEqual([1,2,3,4]);
    })
})