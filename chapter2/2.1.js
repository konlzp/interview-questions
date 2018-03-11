var SingleLinkedList = require("../utils/linkedList")

class RemoveDups {
    /**
     * 
     * @param {SingleLinkedList} linkedList 
     */
    static removeDups(linkedList) {
        var node = linkedList.head;
        var prevNode = null;
        var values = [];
        while(node) {
            var value = node.value;
            if (values.indexOf(value) !== -1) {
                linkedList.deleteNode(node, prevNode);
            } else {
                values.push(value);
                prevNode = node;
            }

            node = node.next;
        }

        return linkedList;
    }

    /**
     * 
     * @param {SingleLinkedList} linkedList 
     */
    static removeDupsWithoutBuffer(linkedList) {
        var node = linkedList.head;

        while (node) {
            var value = node.value;

            var prevNode = node;
            var innerNode = node.next;
            while (innerNode) {
                if (innerNode.value === value) {
                    linkedList.deleteNode(innerNode, prevNode);
                } else {
                    prevNode = innerNode;
                }

                innerNode = innerNode.next;
            }

            node = node.next;
        }

        return linkedList;
    }
}

module.exports = RemoveDups;