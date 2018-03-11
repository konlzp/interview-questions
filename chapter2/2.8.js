// Loop detection. A linkedlist with a loop.
// Return the beginning node of the loop

var LinkedList = require("../utils/linkedList");

class DetectLoop {
    /**
     * 
     * @param {LinkedList} linkedList 
     */
    static detectLoop(linkedList) {
        if (!linkedList.head) {
            return null;
        }

        var slow = linkedList.head;
        var fast = linkedList.head.next;

        while(slow.value !== fast.value) {
            slow = slow.next;

            if (!fast) {
                return null;
            } // Null. Loop doesnt exist
            fast = fast.next;

            if (!fast) {
                return null;
            } // Null. Loop doesnt exist
            fast = fast.next;
        } // A loop exists

        slow = linkedList.head;
        fast = fast.next;

        while(slow.value !== fast.value) {
            slow = slow.next;
            fast = fast.next;
        }

        return slow;
    }
}

module.exports = DetectLoop;