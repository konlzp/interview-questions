/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    if (!root) {
        return [];
    }

    var results = [];
    var queue = [root];
    var nextQueue = [];

    while(1) {
        var levelResult = [];
        while(queue.length > 0) {
            var node = queue.shift();
            levelResult.push(node.val);
            if (node.left) {
                nextQueue.push(node.left);
            }
            if (node.right) {
                nextQueue.push(node.right);
            }
        }
        results.unshift(levelResult);
        if (nextQueue.length) {
            queue = nextQueue;
            nextQueue = [];
        } else {
            return results;
        }
    }
};