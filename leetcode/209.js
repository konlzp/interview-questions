/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    var i = nums.length - 1, j = nums.length - 1, sum = 0;
    var results = Array(nums.length).fill(0);
    for (; i >= 0; --i) {
        while (sum < s && j >= 0) {
            sum += nums[j--];
        }
        if (sum < s) {
            results[i] = -1;
        } else {
            results[i] = i - j;
        }
        sum -= nums[i];
    }

    results = results.filter(val => val > 0);
    return results.length > 0 ? Math.min(...results) : 0;
};

console.log(minSubArrayLen(15, [1,2,3,4,5]));