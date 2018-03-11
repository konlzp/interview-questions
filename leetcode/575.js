/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function(candies) {
    var candyMap = constructMap(candies);

    if (Object.keys(candyMap).length > candies.length / 2) {
        return candies.length / 2;
    } else {
        return Object.keys(candyMap).length;
    }
};

/**
 * 
 * @param {number[]} array 
 */
function constructMap(array) {
    var map = {};
    array.forEach(function(ele) {
        if (!map[ele]) {
            map[ele] = 1;
        }
    });

    return map;
}