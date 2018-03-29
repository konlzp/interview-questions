/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumSmaller = function(nums, target) {
    var count = 0;
    var length = nums.length;
    for (var i = 0; i < length - 2; ++i) {
        var j = i + 1;
        var k = length - 1;
        while (j < k) {
            if (nums[i] + nums[j] + nums[k] < target) {
                count += k - j + 1;
                j++;
            } else {
                k--;
            }
        }
    }
    return count;
};