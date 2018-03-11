// Create a minimum height BST with a sorted array
var TreeNode = require("../utils/treenode");
var BinaryTree = require("../utils/binarytree");

function findMidPoint(start, end) {
    return Math.floor((start + end) / 2);
}

/**
 * @param {Array} array 
 */
function createBSTSubarray(array, start, end) {
    if (end < start) {
        return null;
    } else if (end === start) {
        return new TreeNode(array[start]);
    }

    // The case where end > start
    var midPoint = findMidPoint(start, end);
    var root = new TreeNode(array[midPoint]);
    root.left = createBSTSubarray(array, start, midPoint - 1);
    root.right = createBSTSubarray(array, midPoint + 1, end);

    return root;
}

/**
 * 
 * @param {Array} array 
 */
function createBST(array) {
    var tree = new BinaryTree();
    tree.root = createBSTSubarray(array, 0, array.length - 1);
    return tree;
}

module.exports = createBST;

/**
 * HAS BEEN CONSOLIDATED TO BST.JS
 */