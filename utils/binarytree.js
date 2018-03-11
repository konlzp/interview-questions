var TreeNode = require("./treenode");
var Queue = require("./queue");
var Stack = require("./stack");

class BinaryTree {
    constructor() {
        this.root = undefined;
    }

    printTreePerLevel() {
        this.perLevelTraverse((nodes, level) => {
            if (level === 0) {
                console.log(`${nodes[0].value}`);
                return;
            }

            var printLog = "";
            for (var i = 0; i < nodes.length; i += 2) {
                var value1 = nodes[i] ? nodes[i].value : '*';
                var value2 = nodes[i + 1] ? nodes[i + 1].value : '*';
                printLog += `${value1}  ${value2}${Array(level * 2).join(" ")}`;
            }
            console.log(printLog);
        })
    }

    /**
     * @param {function} callBack 
     */
    preOrderTraverse(root, callBack) {
        if (root) {
            callBack.call(this, root.value);
            this.preOrderTraverse(root.left, callBack);
            this.preOrderTraverse(root.right, callBack);
        }
    }

    getInOrder() {
        var elements = []
        this.inOrderTraverse(this.root, (value) => {
            elements.push(value);
        });
        return elements;
    }

    /**
     * @param {function} callBack 
     */
    inOrderTraverse(root, callBack) {
        if (root) {
            this.inOrderTraverse(root.left, callBack);
            callBack.call(this, root.value);
            this.inOrderTraverse(root.right, callBack);
        }
    }

    /**
     * @param {function} callBack 
     */
    postOrderTraverse(root, callBack) {
        if (root) {
            this.postOrderTraverse(root.left, callBack);
            this.postOrderTraverse(root.right, callBack);
            callBack.call(this, root.value);
        }
    }

    /**
     * @param {Function} callBack 
     */
    perLevelTraverse(callBack) {
        if (!this.root) {
            return null;
        }

        var level = 0;
        var rootQueue = new Queue([this.root]);
        var childQueue = new Queue([]);

        do {
            var nodes = [];
            while (rootQueue.size() !== 0) {
                var node = rootQueue.pop();
                nodes.push(node);

                if (node) {
                    childQueue.push(node.left);
                    childQueue.push(node.right);
                }
            }
            callBack(nodes, level);

            rootQueue = childQueue;
            childQueue = new Queue([]);
            level ++;
        } while(rootQueue.size() !== 0);
    }

    /**
     * O(logN)
     * @param {Stack} path 
     * @param {number} value 
     */
    __getPathToNode(path, value) {
        /**
         * @type {TreeNode}
         */
        var currNode = path.top();

        if (!currNode) {
            throw new Error("Start the search with the root");
        }

        if (currNode.value === value) {
            return true;
        }

        if (currNode.left) {
            path.push(currNode.left);
            if (this.__getPathToNode(path, value)) {
                return true;
            }
            path.pop();
        }

        if (currNode.right) {
            path.push(currNode.right);
            if (this.__getPathToNode(path, value)) {
                return true;
            }
            path.pop();
        } 
        
        if (!currNode.right && !currNode.left ) {
            return false;
        }
    }
    
    get depth() {
        return this.getDepth(null, 0);
    }

    getDepth(root, level) {
        if (!root && this.root) {
            return this.getDepth(this.root, 1);
        }

        var maxDepth = level;
        if (root.left) {
            maxDepth = this.getDepth(root.left, level + 1);
        }
        if (root.right) {
            var newDepth = this.getDepth(root.right, level + 1);
            maxDepth = newDepth > maxDepth ? newDepth : maxDepth;
        }

        return maxDepth;
    }
}

module.exports = BinaryTree;