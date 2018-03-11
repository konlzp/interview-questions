// Route between nodes
var Graph = require("../utils/graph");

/**
 * 
 * @param {Graph} graph 
 * @param {string} id1 
 * @param {string} id2 
 */
function routeBetweenNodes(graph, id1, id2) {
    if (id1 === id2) {
        return true;
    }

    var children = graph.adjacencyList[id1];
    for (var i in children) {
        var child = children[i];
        if (routeBetweenNodes(graph, child, id2)) {
            return true;
        }
    }

    return false;
}

module.exports = routeBetweenNodes;