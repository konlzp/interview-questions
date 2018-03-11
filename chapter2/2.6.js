// Check if a linked list is a palindrome

var LinkedList = require("../utils/linkedList");
var Stack = require("../utils/stack");

class CheckPalindrome {
    /**
     * 
     * @param {LinkedList} list 
     */
    static checkPalindrome(list) {
        var length = list.getLength();
        var stack = new Stack([]);

        if (length % 2 === 1) {
            return false;
        }

        var node = list.head;
        for(var i = 0; i < length / 2; ++i) {
            stack.push(node.value);
            node = node.next;
        }

        for(var i = length / 2; i < length; ++i) {
            var top = stack.pop();
            if (top !== node.value) {
                return false;
            }
            node = node.next;
        }

        return true;
    }
}

module.exports = CheckPalindrome;