/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var anagramMappings = function(A, B) {
    var Bmap = {};

    B.forEach((ele, index) => {
        if (!Bmap[ele]) {
            Bmap[ele] = [];
        }
        Bmap[ele].push(index);
    });

    var result = [];
    A.forEach((ele) => {
        result.push(Bmap[ele].pop());
    });

    return result;
};

console.log()