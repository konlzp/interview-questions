// Find common ancestor

var TreeNode = require("../utils/treenode");

/**
 * @type {TreeNode}
 */
var result;

/**
 * 
 * @param {TreeNode} root 
 * @param {number} val1 
 * @param {number} val2 
 */
function findCommonAncestor(root, val1, val2) {
    var foundValues = 0;
    if (!root) {
        return foundValues;
    }

    if (root.value === val1) {
        foundValues += 1;
    } else if (root.value === val2) {
        foundValues += 1;
    }

    foundValues += findCommonAncestor(root.left, val1, val2);
    foundValues += findCommonAncestor(root.right, val1, val2);

    if (foundValues === 2 && !result) {
        result = root;
    }
    
    return foundValues;
}