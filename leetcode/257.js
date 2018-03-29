/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    var results = [];
    if (root) {
        buildPathRecursive(root, [], results);
    }
    return results;
};

function buildPathRecursive(root, stack, results) {
    if (!root.left && !root.right) {
        stack.push(root.val);
        results.push(stack.join("->"));
        stack.pop();
        return ;
    }

    stack.push(root.val);

    if (root.left) {
        buildPathRecursive(root.left, stack, results);
    }
    if (root.right) {
        buildPathRecursive(root.right, stack, results);
    }

    stack.pop();
}