/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (!nums.length) {
        return 0;
    }
    var largest = nums[0];
    var results = [];
    for (var i = 0; i < nums.length; ++i) {
        if (i === 0 || results[i - 1] < 0) {
            results[i] = nums[i];
        } else {
            results[i] = results[i - 1] + nums[i];
        }
        if (largest < results[i]) {
            largest = results[i];
        }
    }

    return largest;
};