var Node = require("./node")

class LinkedList{
    /**
     * @param {Array<number>} array
     */
    constructor(array) {
        var prevNode = null;
        array.forEach((ele) => {
            var node = new Node(ele);
            if (prevNode) {
                prevNode.next = node;
            }
            if (!this.head) {
                /**
                 * @type {Node}
                 */
                this.head = node;
            }
            prevNode = node;
        });
    }

    /**
     * 
     * @param {Node} node 
     * @param {Node} prevNode 
     */
    deleteNode(node, prevNode) {
        if (!prevNode) { // It is the head
            this.head = node.next;
        } else {
            prevNode.next = node.next;
        }

        if (node.next && node.next.previous) {
            node.next.previous = prevNode;
        }
    }

    traverse() {
        var values = [];
        if (this.head) {
            var node = this.head;
            while(node) {
                values.push(node.value);
                node = node.next;
            }
        }
        return values;
    }

    /**
     * 
     * @param {Node} newNode 
     */
    appendNode(newNode) {
        var node = this.head;
        var prevNode = null;

        if (!node) {
            this.head = newNode;
            return;
        }

        while(node) {
            prevNode = node;
            node = node.next;
        }
        
        this.insertNode(newNode, prevNode);
    }

    addNodeToFront(newNode) {
        this.insertNode(newNode, null);
    }

    /**
     * 
     * @param {Node} newNode 
     * @param {Node} prevNode 
     */
    insertNode(newNode, prevNode) {
        if (!prevNode) {
            if (this.head) {
                newNode.next = this.head;
            }
            this.head = newNode;
            return;
        }

        var next = prevNode.next;
        prevNode.next = newNode;
        newNode.next = next;
    }

    /**
     * 
     * @param {number} index 
     */
    getNode(index) {
        var node = this.head;
        var i = 1;
        for(; i < index && node; ++i) {
            node = node.next;
        }

        if (i === index) {
            return node;
        } else {
            return null; // Doesnt have enough number of nodes
        }
    }

    getLength() {
        var node = this.head;
        var length = 0;

        while(node) {
            length ++;
            node = node.next;
        }

        return length;
    }
}

module.exports = LinkedList;