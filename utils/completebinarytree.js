var BinaryTree = require("./binarytree");
var TreeNode = require("./treenode");
var Queue = require("./queue");

class CompleteBinaryTree extends BinaryTree {
    /**
     * @param {Array} array 
     */
    constructor(array) {
        super();
        array.forEach((value) => {
            this.setRightmostNode(value);
        });
    }

    getRightmostNode() {
        if (!this.root) {
            return null;
        }

        /**
         * @type {Queue}
         */
        var rootQueue = new Queue([this.root]);
        /**
         * @type {TreeNode}
         */
        var root;
        while (root = rootQueue.pop()) {
            if (root.left && root.right) {
                // In the case of both children exist
                // Keep searching
                rootQueue.push(root.left);
                rootQueue.push(root.right);
            } else if (root.left) {
                // In the case that only left child exist
                // That left child is the last node
                return root.left;
            } else if (root.right) {
                // In the case that only right child exists
                // this wouldnt be a complete tree, throw error
                throw new Error("Invalid existing complete tree");
            } else {
                // In the case that neither of the children exists
                // The last node should be the last node in this level
                if (rootQueue.size() === 0) {
                    return root;
                }
                var lastNode;
                while(rootQueue.size() !== 0) {
                    lastNode = rootQueue.pop();
                }
                return lastNode;
            }
        }
    }

    /**
     * @param {number} value 
     */
    setRightmostNode(value) {
        if (!this.root) {
            this.root = new TreeNode(value);
            return ;
        }

        /**
         * @type {Queue}
         */
        var rootQueue = new Queue([this.root]);
        var root;
        while (root = rootQueue.pop()) {
            if (root.left && root.right) {
                // In the case of both children exist
                // Keep searching
                rootQueue.push(root.left);
                rootQueue.push(root.right);
            } else if (root.left) {
                // In the case that only left child exist
                // the next node should be the right child
                root.right = new TreeNode(value);
                return;
            } else if (root.right) {
                // In the case that only right child exists
                // this wouldnt be a complete tree, throw error
                throw new Error("Invalid existing complete tree");
            } else {
                // In the case that neither of the children exists
                // The next node should be the left child
                // The correctness is ensured by the order the nodes are traversed
                root.left = new TreeNode(value);
                return;
            }
        }
    }
}

module.exports = CompleteBinaryTree;