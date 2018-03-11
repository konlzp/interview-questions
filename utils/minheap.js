var TreeNode = require("./treenode");
var Stack = require("./stack");
var CBT = require("./completebinarytree");

class MinHeap extends CBT {
    /**
     * 
     * @param {Array} array 
     */
    constructor(array) {
        super([]);
        array.forEach((value) => {
            this.insert(value);
        });
    }

    insert(value) {
        this.setRightmostNode(value);

        var path = new Stack([this.root]);
        this.__getPathToNode(path, value);

        /**
         * @type {TreeNode}
         */
        var currNode;
        var prevNode;
        while(currNode = path.pop()) {
            if (prevNode && prevNode.value < currNode.value) {
                currNode.value = prevNode.value ^ currNode.value;
                prevNode.value = prevNode.value ^ currNode.value;
                currNode.value = prevNode.value ^ currNode.value;
            }
            
            prevNode = currNode;
        }
    }

    extractMin() {
        var minValue = this.root.value;

        var rightmostNode = this.getRightmostNode();
        if (!rightmostNode) {
            return null;
        }

        var path = new Stack([this.root]);
        this.__getPathToNode(path, rightmostNode.value);

        var newRootValue = path.pop().value;
        this.root.value = newRootValue;
        if (path.size() === 0) {
            // root is the last node of the tree
            this.root = undefined;
            return minValue;
        }

        // Remove that node from the tree
        var parentNode = path.pop();
        if (parentNode.left.value === newRootValue) {
            parentNode.left = null;
        } else {
            parentNode.right = null;
        }

        // Pass the new root down to the leaf
        var node = this.root;
        var leftChild = node.left;
        var rightChild = node.right;
        while ((leftChild && leftChild.value < node.value) ||
            (rightChild && rightChild.value < node.value)) {
            var childToSwap;

            if (!leftChild) {
                throw new Error("heap is not a complete tree");
            } else if (!rightChild) {
                // only left child exists
                childToSwap = leftChild;
            } else {
                // both children exist
                if (leftChild.value < rightChild.value) {
                    childToSwap = leftChild;
                } else {
                    childToSwap = rightChild;
                }
            }

            node.value = childToSwap.value ^ node.value;
            childToSwap.value = childToSwap.value ^ node.value;
            node.value = childToSwap.value ^ node.value;

            node = childToSwap;
            leftChild = node.left;
            rightChild = node.right;
        }

        return minValue;
    }
}

module.exports = MinHeap;