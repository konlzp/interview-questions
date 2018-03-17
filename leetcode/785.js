/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
    if (!graph.length) {
        return true;
    }

    var sets = [[],[]];
    var queue = [];
    var visited = Array(graph.length).fill(false);

    var curr;
    while (visited.indexOf(false) !== -1) {
        queue.push({
            node: visited.indexOf(false),
            set: 0
        });
        while (curr = queue.shift()) {
            visited[curr.node] = true;
            sets[curr.set].push(curr.node);

            var nextSet = 1 - curr.set;
            var flag = true;
            flag = graph[curr.node].every((nextNode) => {
                if (sets[curr.set].indexOf(nextNode) !== -1) {
                    return false;
                } else if (sets[nextSet].indexOf(nextNode) === -1) {
                    sets[nextSet].push(nextNode);
                    queue.push({
                        node: nextNode,
                        set: nextSet
                    });
                }
                return true;
            });

            if (!flag) {
                return false;
            }
        }
    }
    return true;
};

console.log(isBipartite([[1,3], [0,2], [1,3], [0,2]]));
console.log(isBipartite([[1,2,3], [0,2], [0,1,3], [0,2]]));