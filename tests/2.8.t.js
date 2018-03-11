var DetectLoop = require("../chapter2/2.8");
var LinkedList = require("../utils/linkedList");

describe('Detect loop', () => {
    /**
     * @type {LinkedList}
     */
    var loopList;
    beforeEach(() => {
        loopList = new LinkedList([1,2,3,4,5]);
    })

    it("loop list 1", () => {
        var tail = loopList.getNode(5);
        var beginning = loopList.getNode(3);
        tail.next = beginning;

        expect(DetectLoop.detectLoop(loopList)).toEqual(beginning);
    });

    it('loop list 2', () => {
        var tail = loopList.getNode(5);
        var beginning = loopList.head;
        tail.next = beginning;

        expect(DetectLoop.detectLoop(loopList)).toEqual(beginning);
    });
});