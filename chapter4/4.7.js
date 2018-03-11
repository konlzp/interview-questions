// build order.
// Given a dependency list, see if all the projects can be done.

var Graph = require("../utils/graph");

/**
 * 
 * @param {Array} projects 
 * @param {Array<id, id>} dependencies 
 */
function buildOrder(projects, dependencies) {
    var buildGraph = new Graph([], dependencies, true);

    var inBounds = {};
    for (var i in projects) {
        var project = projects[i];

        inBounds[project] = buildGraph.checkInbound(project);
    }

    var buildOrder = [];
    for (var project in inBounds) {
        if (!inBounds[project]) {
            buildOrder.push(project);
        }
    }
}

/**
 * @param {Graph} graph
 * @param {string} project 
 * @param {Object.<string, number>} inBounds 
 * @param {Array} buildOrder 
 */
function findNextProject(graph, project, inBounds, buildOrder) {
    for (var project in inBounds) {
        if (buildOrder.indexOf(project) === -1 &&
            inBounds[project] === 0) {
            buildOrder.push(project);
            
        }
    }
}