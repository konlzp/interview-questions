// Return a list of linkedlist that represent each level of a binary tree

var Node = require("../utils/node");
var LinkedList = require("../utils/linkedlist");
var BinaryTree = require("../utils/binarytree");

/**
 * 
 * @param {BinaryTree} tree 
 */
function depthList(tree) {
    var root = tree.root;
    if (!root) {
        return [];
    }

    var lists = [];
    var linkedList = new LinkedList([root]);
    while (linkedList.getLength()) {
        lists.push(linkedList);
        linkedList = getChildren(linkedList);
    }

    return lists;
}

/**
 * 
 * @param {LinkedList} linkedList 
 */
function getChildren(linkedList) {
    var childrenList = new LinkedList([]);
    var node = linkedList.head;

    while (node) {
        var treeNode = node.value;
        if (treeNode.left) {
            childrenList.appendNode(new Node(treeNode.left));
        }
        if (treeNode.right) {
            childrenList.appendNode(new Node(treeNode.right));
        }
    }

    return childrenList;
}