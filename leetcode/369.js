/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var plusOne = function(head) {
    if (recursivePlusOne(head)) {
        var newHead = new ListNode(1);
        newHead.next = head;
        return newHead;
    }
    return head;
};

function recursivePlusOne(head) {
    if (!head) {
        return 0;
    }
    var result;
    if (!head.next) {
        result = haed.val + 1;
    } else {
        result = head.val + recursivePlusOne(head.next);
    }
    head.val = result % 10;
    return Math.floor(result / 10);
}