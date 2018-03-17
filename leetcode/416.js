/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    nums.sort();
    var sum = nums.reduce((a, b) => a + b);

    if (sum % 2 === 1) {
        return false;
    }

    return canPartitionUtilsDP(nums, sum / 2);
};

function canPartitionUtilsDFS(nums, index, target) {
    if (target === 0) {
        return true;
    }

    for (var i = index; i < nums.length; ++i) {
        if (target - nums[index] < 0) {
            return false;
        }
        if (canPartitionUtils(nums, i + 1, target - nums[i])) {
            return true;
        }
    }
    return false;
}

function canPartitionUtilsDP(nums, target) {
    var canArriveAt = {};
    
    canArriveAt[0] = 1;

    nums.forEach((num) => {
        for (var i = target; i >= num; --i) {
            canArriveAt[i] = canArriveAt[i] || canArriveAt[i - num];
        }
    });

    return canArriveAt[target] === 1;
}

console.log(canPartition([1,2,5]));
console.log(canPartition([1,2,3,4,5,7]));