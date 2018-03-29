/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {
    nums.filter((num) => {
        num > 0;
    });
    nums.push(1);
    nums.unshift(1);

    var memo = Array(nums.length).fill(nums.length);
    return maxCoinsRecursive(nums, memo, 0, nums.length - 1);
};

function maxCoinsRecursive(nums, memo, left, right) {
    if (left === right - 1) {
        return 0;
    }
    if (memo[left][right]) {
        return memo[left][right];
    }
    var tempMax = 0;
    for (var i = left + 1; i < right; ++i) {
        tempMax = Math.max(tempMax, 
            nums[left] * nums[i] * nums[right] +
            maxCoinsRecursive(nums, memo, left, i) +
            maxCoinsRecursive(nums, memo, i, right));
    }
    memo[left][right] = tempMax;
    return tempMax;
}

console.log(maxCoins([3,1,5,8]));