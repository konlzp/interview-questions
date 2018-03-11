var GraphNode = require("./graphnode");

class Graph {
    /**
     * 
     * @param {id: value} valueMap 
     * @param {Array<id, id>} connectionMap 
     * @param {boolean} isDirected
     */
    constructor(valueMap, connectionMap, isDirected) {
        this.nodes = {};
        for (var id in valueMap) {
            this.nodes[id] = valueMap[id];
        }

        this.adjacencyList = {};
        for (var i in connectionMap) {
            var idPair = connectionMap[i];
            this.setAdjacencyList(idPair[0], idPair[1]);

            if (!isDirected) {
                this.setAdjacencyList(idPair[1], idPair[0]);
            }
        }

        this.adjacencyMatrix = {};
        for (var i in connectionMap) {
            var idPair = connectionMap[i];
            this.setAdjacencyMatrix(idPair[0], idPair[1]);

            if (!isDirected) {
                this.setAdjacencyMatrix(idPair[1], idPair[0]);
            }
        }
    }

    setAdjacencyMatrix(from, to) {
        if (!this.nodes[from]) {
            throw new Error(`Node id ${from} not in the graph`);
        }
        if (!this.nodes[to]) {
            throw new Error(`Node id ${to} not in the graph`);
        }

        if (!this.adjacencyMatrix[from]) {
            this.adjacencyMatrix[from] = {};
        }

        this.adjacencyMatrix[from][to] = 1;
    }

    /**
     * @param {string} from 
     * @param {string} to 
     */
    setAdjacencyList(from, to) {
        if (!this.nodes[from]) {
            throw new Error(`Node id ${from} not in the graph`);
        }
        if (!this.nodes[to]) {
            throw new Error(`Node id ${to} not in the graph`);
        }

        if (!this.adjacencyList[from]) {
            this.adjacencyList[from] = [];
        }

        this.adjacencyList[from].push(to);
    }

    /**
     * @param {string} key 
     */
    checkInbound(key) {
        var numInBound = 0;
        for (var from in this.adjacencyMatrix) {
            if (this.adjacencyMatrix[from][key]) {
                numInBound ++;
            }
        }

        return numInBound;
    }
}

module.exports = Graph;