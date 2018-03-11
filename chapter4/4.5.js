// Validate BST

var TreeNode = require("../utils/treenode");

/**
 * 
 * @param {TreeNode} root 
 */
function validateBST(root) {
    validateBSTSubtree(root, Number.MIN_VALUE, Number.MAX_VALUE);
}

/**
 * 
 * @param {TreeNode} root 
 * @param {number} min 
 * @param {number} max 
 */
function validateBSTSubtree(root, min, max) {
    if (root.value < min || root.value > max) {
        return false;
    }

    var isBST = true;
    if (root.left) {
        isBST = isBST && validateBSTSubtree(
            root.left, min, root.value);
    }
    if (root.right) {
        isBST = isBST && validateBSTSubtree(
            root.right, roo.value, max);
    }

    return isBST;
}