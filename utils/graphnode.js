var md5 = require("md5");

class GraphNode {
    /**
     * @param {*} value
     * @param {string} id
     */
    constructor(value, id) {
        this.value = value;
        this.id = id;
        this.children = [];
    }

    /**
     * 
     * @param {GraphNode} node 
     */
    connectTo(node) {
        if (this.children.indexOf(node.id) === -1) {
            this.children.push(node.id);
        }
    }
}

module.exports = GraphNode;