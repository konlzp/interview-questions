// Return kth to last: return the last to kth element of a linked list
var LinkedList = require("../utils/linkedList");
var KQueue = require("../utils/kqueue");

class KToLast {
    /**
     * 
     * @param {LinkedList} linkedList 
     * @param {number} k
     */
    static getKToLast(linkedList, k) {
        var node = linkedList.head;
        var queue = new KQueue([], k);

        while(node) {
            queue.push(node.value)
            node = node.next;
        }

        return queue.first();
    }
}

module.exports = KToLast;