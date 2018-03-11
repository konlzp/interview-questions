var LinkedList = require("../utils/linkedList");
var Node = require("../utils/node");

class SumLists {
    /**
     * 
     * @param {LinkedList} list1 
     * @param {LinkedList} list2 
     */
    static sumLists(list1, list2) {
        var upCode = 0;
        var node1 = list1.head;
        var node2 = list2.head;

        var resultList = new LinkedList([]);

        while (node1 || node2) {
            var digit1 = node1 ? node1.value : 0;
            var digit2 = node2 ? node2.value : 0;

            var result = digit1 + digit2 + upCode;
            var resultDigit = result % 10;
            var upCode = Math.floor(result / 10);

            resultList.appendNode(new Node(resultDigit));

            if (node1) {
                node1 = node1.next;
            }
            if (node2) {
                node2 = node2.next;
            }
        }

        if (upCode) {
            resultList.appendNode(new Node(upCode));
        }

        return resultList;
    }

    /**
     * 
     * @param {LinkedList} list1 
     * @param {LinkedList} list2 
     */
    static sumListsReverse(list1, list2) {
        var len1 = list1.getLength();
        var len2 = list2.getLength();

        var newHead1 = this.getNewHead(list1, len1 - len2);
        var newHead2 = this.getNewHead(list2, len2 - len1);

        var result = new LinkedList([]);
        var carry = this.addSameSize(result, newHead1, newHead2);

        if (newHead1.value !== list1.head.value) {
            carry = this.addBackDiff(
                result, list1.head, newHead1, carry);
        } else if (newHead2.value !== list2.head.value) {
            carry = this.addBackDiff(
                result, list2.head, newHead2, carry);
        }

        if (carry) {
            result.addNodeToFront(new Node(carry));
        }

        return result;
    }

    /**
     * node1 and node2 should be null / not null at the same time
     * @param {LinkedList} resultList 
     * @param {Node} node1 
     * @param {Node} node2 
     */
    static addSameSize(resultList, node1, node2) {
        if (!node1) {
            return 0;
        }

        var lowCarry = this.addSameSize(resultList, node1.next, node2.next);
        var resultNumber = node1.value + node2.value + lowCarry;
        var resultDigit = resultNumber % 10;
        var upCarry = Math.floor(resultNumber / 10);
        resultList.addNodeToFront(new Node(resultDigit));

        return upCarry;
    }

    /**
     * 
     * @param {LinkedList} resultList 
     * @param {Node} oldHead 
     * @param {Node} newHead 
     * @param {number} carry 
     */
    static addBackDiff(resultList, oldHead, newHead, carry) {
        if (JSON.stringify(oldHead) === JSON.stringify(newHead)) {
            return null;
        }

        var lowCarry = this.addBackDiff(resultList, oldHead.next, newHead, carry);
        var resultNumber, resultDigit, upCarry;
        if (lowCarry === null) {
            // This is the node before the same list starts
            resultNumber = oldHead.value + carry;
        } else {
            resultNumber = oldHead.value + lowCarry;
        }

        resultDigit = resultNumber % 10;
        upCarry = Math.floor(resultNumber / 10);
        
        resultList.addNodeToFront(new Node(resultDigit));

        return upCarry;
    }

    /**
     * 
     * @param {LinkedList} list 
     * @param {number} diff 
     */
    static getNewHead(list, diff) {
        if (diff < 0) {
            return list.head;
        }

        var newHead = list.head;
        for (var i = 0; i < diff; ++i) {
            newHead = newHead.next;
        }

        return newHead;
    }
}

module.exports = SumLists;