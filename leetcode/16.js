/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    var sortedNums = nums.slice().sort((a, b) => a - b);

    if (sortedNums.length <= 3) {
        return (sortedNums[0] ? sortedNums[0] : 0) + (sortedNums[1] ? sortedNums[1] : 0) + (sortedNums[2] ? sortedNums[2] : 0);
    }

    var ans = sortedNums[0] + sortedNums[1] + sortedNums[2];
    var len = nums.length;
    for (var i = 0; i < len - 2; ++i) {
        var j = i + 1;
        var k = len - 1;
        while (j < k) {
            var temp = sortedNums[i] + sortedNums[j] + sortedNums[k];
            if (Math.abs(temp - target) < Math.abs(ans - target)) {
                ans = temp;
            }
            if (ans === target) {
                return target;
            }
            if (temp > target) {
                k--;
            } else {
                j++;
            }
        }
    }
    return ans;
};

console.log(threeSumClosest([0,1,2],3));