/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[][]}
 */
var printTree = function(root) {
    // get depth
    var depth = getDepth(root);
    // calculate the index for each node to put the value in
    var results = [];
    for (var i = 0; i < depth; ++i) {
        results.push(Array(Math.floor(Math.pow(2, depth) - 1)).fill(""));
    }
    insertNode(results, root, 1, Math.floor(Math.pow(2, depth - 1) - 1));
    return results;
};

function insertNode(results, root, depth, pos) {
    if (!root) {
        return ;
    }
    results[depth - 1][pos] = root.value + "";
    insertNode(results, root.left, depth + 1, pos - Math.floor(Math.pow(2, results.length - depth - 1)));
    insertNode(results, root.right, depth + 1, pos + Math.floor(Math.pow(2, results.length - depth - 1)));
}

function getDepth(root) {
    if (!root) {
        return 0;
    }
    var depth = getDepth(root.left) + 1;
    depth = Math.max(depth, getDepth(root.right) + 1);
    return depth;
}

var BinaryTree = require("../utils/binarytree");
var tree = new BinaryTree("1,2,null,4,null");
console.log(printTree(tree.root));