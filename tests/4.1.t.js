var routeBetweenNodes = require("../chapter4/4.1");
var Graph = require("../utils/graph");

describe('route between nodes', () => {
    it('route between nodes in graph 1', () => {
        var graph = new Graph(
            {1: 1, 2: 2, 3: 3, 4: 4},
            {1: 2, 2: 3, 3: 4},
            true
        );

        expect(routeBetweenNodes(graph, 1, 4)).toBe(true);
    });

    it('route between nodes in graph 2', () => {
        var graph = new Graph(
            {1: 1, 2: 2, 3: 3, 4: 4},
            {1: 2, 2: 3},
            true
        );

        expect(routeBetweenNodes(graph, 1, 4)).toBe(false);
    });
});