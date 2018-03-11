// Partition. Partition a linked list with a certain value k
// Nodes less than k should be on the left, others on the right

var LinkedList = require("../utils/linkedList");

class PartitionList {
    /**
     * 
     * @param {LinkedList} linkedList 
     * @param {number} k 
     * @returns {LinkedList}
     */
    static partitionList(linkedList, k) {
        var node = linkedList.head;
        var prevNode = null;

        while(node) {
            if (node.value < k) {
                linkedList.deleteNode(node, prevNode);
                linkedList.insertNode(node, null);
                if (prevNode) {
                    node = prevNode.next;
                } else {
                    node = node.next;
                }
            } else {
                prevNode = node;
                node = node.next;
            }
        }

        return linkedList;
    }
}

module.exports = PartitionList;