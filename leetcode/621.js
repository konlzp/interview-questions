/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    var max = findMostTask(tasks);

    return Math.max((n + 1) * (max.max - 1) + max.maxCount, tasks.length);
};

function findMostTask(tasks) {
    var countMap = {};
    var max = 0;
    var maxCount = 0;
    for (var i = 0; i < tasks.length; ++i) {
        if (!countMap[tasks[i]]) {
            countMap[tasks[i]] = 0;
        }
        countMap[tasks[i]] ++;
        if (max < countMap[tasks[i]]) {
            max = countMap[tasks[i]];
            maxCount = 1;
        } else if (max === countMap[tasks[i]]) {
            maxCount ++;
        }
    }
    return {
        max: max,
        maxCount: maxCount
    };
}

function buildCountMap(tasks) {
    var countMap = {};
    for (var i = 0; i < tasks.length; ++i) {
        if (!countMap[tasks[i]]) {
            countMap[tasks[i]] = 0;
        }
        countMap[tasks[i]] ++;
    }
    return countMap;
}