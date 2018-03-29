/**
 * @param {number[][]} M
 * @return {number}
 */

var findCircleNum = function(M) {
    var visited = Array(M.length).fill(false);
    var circleCount = 0;

    while (visited.indexOf(false) !== -1) {
        var next = visited.indexOf(false);

        var queue = [];
        while (typeof next !== 'undefined') {
            if (!visited[next]) {
                visited[next] = true;
                queue = queue.concat(M[next].reduce((friends, isFriend, friendInd) =>{
                    if (isFriend) {
                        friends.push(friendInd);
                    }
                    return friends;
                }, []));
            }
            next = queue.pop();
        }
        circleCount ++;
    }

    return circleCount;
};

console.log(findCircleNum([[1,0,0,1],[0,1,1,0],[0,1,1,1],[1,0,1,1]]));