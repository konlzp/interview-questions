var TreeNode = require("./treenode");
var BinaryTree = require("./binarytree");

function findMidPoint(start, end) {
    return Math.floor((start + end) / 2);
}

class BST extends BinaryTree {
    /**
     * 
     * @param {Array} array 
     * @param {boolean} isMinimum 
     */
    constructor(array, isMinimum) {
        super();

        if (isMinimum) {
            array = array.sort();
            this.root = this.createMinBST(array, 0, array.length - 1);
        } else {
            this.createBST(array);
        }
    }

    /**
     * @param {Array} array 
     */
    createMinBST(array, start, end) {
        if (end < start) {
            return null;
        } else if (end === start) {
            return new TreeNode(array[start]);
        }

        // The case where end > start
        var midPoint = findMidPoint(start, end);
        var root = new TreeNode(array[midPoint]);
        root.left = this.createMinBST(array, start, midPoint - 1);
        root.right = this.createMinBST(array, midPoint + 1, end);

        return root;
    }

    /**
     * @param {Array} array 
     */
    createBST(array) {
        array.forEach((value) => {
            this.insertValue(this.root, value);
        });
    }

    /**
     * 
     * @param {TreeNode} root 
     * @param {number} value 
     */
    insertValue(root, value) {
        if(!root) {
            if (!this.root) {
                this.root = new TreeNode(value);
                return this.root;
            }
            throw new Error("Node doesnt exist");
        }

        if (value < root.value) {
            if (!root.left) {
                root.left = new TreeNode(value);
                root.left.parent = root;
                return root.left;
            } else {
                this.insertValue(root.left, value);
            }
        } else {
            if (!root.right) {
                root.right = new TreeNode(value);
                root.right.parent = root;
                return root.right;
            } else {
                this.insertValue(root.right, value);
            }
        }
    }

    /**
     * @param {number} value 
     */
    removeValue(value) {
        this.root = 
            this.__removeValueUtil(this.root, value);
    }

    /**
     * @param {TreeNode} root 
     * @param {number} value 
     */
    __removeValueUtil(root, value) {
        if (!root) {
            return null;
        }

        if (root.value < value) {
            // On the right
            root.right = 
                this.__removeValueUtil(root.right, value);
            root.right.parent = root;
        } else if (root.value > value) {
            // On the left
            root.left = 
                this.__removeValueUtil(root.left, value);
            root.left.parent = root;
        } else {
            // This is the node to be removed

            // If the root only has one subtree
            if (root.left && !root.right) {
                return root.left;
            } else if (root.right && !root.left) {
                return root.right;
            } else if (!root.right && !root.left) {
                // In the case of no child
                // Return null and remove itself
                return null;
            }

            // In the case of both subtrees exist

            // Find the in-order presessor
            // The rightmost child in the left subtree
            var parent = root;
            var node = root.left
            while (node.right) {
                parent = node;
                node = node.right;
            }

            // Assign the node's value to root
            root.value = node.value;

            // And remove that node
            if (parent.right) {
                parent.right = this.__removeValueUtil(node, node.value);
                parent.right.parent = parent;
            } else {
                parent.left = this.__removeValueUtil(node, value);
                parent.left.parent = parent;
            }
        }

        return root;
    }
}

module.exports = BST;