var LinkedList = require("../utils/linkedList");
var Node = require("../utils/node");

describe('LinkedList', function() {
    /**
     * @type {LinkedList}
     */
    var linkedList;

    beforeEach(function() {
        linkedList = new LinkedList([1,2,3]);
    })

    it('linkedlist should traverse all elements', function() {
        expect(linkedList.traverse()).toEqual([1,2,3]);
    });

    it('deleteNode delete head successful', function() {
        var node = linkedList.head;
        linkedList.deleteNode(node, null);

        expect(linkedList.traverse()).toEqual([2,3]);
    });

    it('deleteNode delete normal node', function() {
        var node = linkedList.head.next;
        linkedList.deleteNode(node, linkedList.head);

        expect(linkedList.traverse()).toEqual([1,3]);
    });

    it('insertNode insert node', () => {
        var newNode = new Node(4, null);
        var node = linkedList.head.next;

        linkedList.insertNode(newNode, node);

        expect(linkedList.traverse()).toEqual([1,2,4,3]);
    });

    it('appendNode', () => {
        var newNode = new Node(4, null);
        linkedList.appendNode(newNode);

        expect(linkedList.traverse()).toEqual([1,2,3,4]);
    });

    it('getNode', () => {
        var node = linkedList.getNode(3);
        expect(node.value).toBe(3);
    });

    it('getNode null', () => {
        var node = linkedList.getNode(4);
        expect(node).toBe(null);
    });
});