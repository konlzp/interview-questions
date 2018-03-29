/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    if (!root) {
        return [];
    }

    var results = [];
    pathSumRecursive(root, sum, results, []);
    return results;
};

function pathSumRecursive(root, target, results, stack) {
    stack.push(root.val);

    if (!root.left && !root.right) {
        if (root.val === target) {
            results.push(stack);
        }
    } else {
        if (root.left) {
            pathSumRecursive(root.left, target - root.val, results, stack);
        }
        if (root.right) {
            pathSumRecursive(root.right, target - root.val, results, stack);
        }
    }

    stack.pop();
}