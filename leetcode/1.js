/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var seen = {};
    for (var i = 0; i < nums.length; ++i) {
        var num = nums[i];
        if (typeof seen[target - num] !== 'undefined') {
            return [seen[target - num], index];
        } else {
            seen[num] = index;
        }
    }

    return [];
};

console.log(twoSum([3,2,4], 6));