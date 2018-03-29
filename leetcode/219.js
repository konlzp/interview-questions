/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    var indexMap = {};
    nums.forEach((num, index) => {
        if (!indexMap[num]) {
            indexMap[num] = [];
        }
        indexMap[num].push(index);
    });

    for (var num in indexMap) {
        var indexes = indexMap[num];
        for (var i = 1; i < indexes.length; ++i) {
            if (indexes[i - 1] >= indexes[i] - k) {
                return true;
            }
        }
    }
    return false;
};