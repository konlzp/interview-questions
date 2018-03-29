/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {
    if (!root) {
        return ;
    }
    var nextLevel = [root];

    while (nextLevel.length) {
        var queue = nextLevel.slice();
        nextLevel = [];
        var prev = null;
        while (queue.length) {
            var node = queue.shift();
            node.next = prev;
            prev = node;

            if (node.right) {
                nextLevel.push(node.right);
            }
            if (node.left) {
                nextLevel.push(node.left);
            }
        }
    }
};

var BinaryTree = require("../utils/binarytree");
var tree = new BinaryTree("1,2,3,4,null,null,5,null");
console.log(tree);
connect(tree.root);
console.log(tree);