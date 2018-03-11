// In order successor in a BST

var BST = require("../utils/bst");
var TreeNode = require("../utils/treenode");

/**
 * @param {TreeNode} node 
 */
function findInOrderSuccessor(node) {
    if (node.right) {
        return findLeftMost(node.right);
    }

    while(node.parent) {
        var parent = node.parent;
        if (parent.left.value === node.value) {
            // If it is left subtree
            return parent;
        } else {
            // right subtree
            node = parent;
        }
    }

    return null;
}

function findLeftMost(node) {}