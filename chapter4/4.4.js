// Check balanced. Each node's subtrees' depth does not differ by more than 1
var BinaryTree = require("../utils/binarytree");
var TreeNode = require("../utils/treenode");

/**
 * 
 * @param {BinaryTree} tree 
 */
function isBalanced(tree) {
    if (isSubTreeBalanced(tree.root)) {
        return true;
    }
    return false;
}

/**
 * 
 * @param {TreeNode} root 
 */
function isSubTreeBalanced(root) {
    if (!root) {
        return false;
    }

    if (!root.left && !root.right) {
        return 1;
    }

    var leftDepth = 0, rightDepth = 0;
    if (root.left) {
        leftDepth = isSubTreeBalanced(root.left);
    }
    if (root.right) {
        rightDepth = isSubTreeBalanced(root.right);
    }

    if (!leftDepth || !rightDepth ||
        Math.abs(leftDepth - rightDepth) > 1) {
        return false;
    }

    return leftDepth > rightDepth ? leftDepth + 1 :
        rightDepth + 1;
}