/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestConsecutive = function(root) {
    return longestConsecutiveRecursive(root, 0, null);
};

function longestConsecutiveRecursive(root, count, parentVal) {
    if (!root) {
        return 0;
    }
    if (parentVal === null || root.val !== parentVal + 1) {
        count = 1;
    } else {
        count ++;
    }
    var left = longestConsecutiveRecursive(root.left, count, root.val);
    var right = longestConsecutiveRecursive(root.right, count, root.val);
    return Math.max(count, left, right);
}