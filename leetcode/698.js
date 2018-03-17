/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function(nums, k) {
    nums.sort((a, b) => a - b);
    var sum = nums.reduce((a, b) => a + b, 0);
    if (sum % k || k > nums.length) {
        return false;
    }

    if (k === 1) {
        return true;
    }

    var subsets = [];
    for (var i = 0; i < k; ++i) {
        subsets.push([]);
    }

    return canPartitionKSubsetsUtils(nums, subsets,
        Array(nums.length).fill(false), sum / k, 0, 0);
};

/**
 * @param {number[]} nums 
 * @param {number[][]} subsets 
 * @param {boolean[]} visited
 * @param {number} subsetTarget
 * @param {number} curSubset 
 * @param {number} startingIndex 
 */
function canPartitionKSubsetsUtils(nums, subsets, visited,
    subsetTarget, curSubset, startingIndex) {
    var subsetSum = subsets[curSubset].reduce((a, b) => a + b, 0);
    if (subsetSum === subsetTarget) {
        // If the current subset has a sum of target value

        if (curSubset === subsets.length - 2) {
            return true;
        }

        return canPartitionKSubsetsUtils(nums, subsets, visited,
            subsetTarget, curSubset + 1, 0);
    }

    // If the current subset doesnt have a sum of target value
    for (var i = startingIndex; i < nums.length; ++i) {
        // The reason for a startingIndex is so that we dont add redundant numbers in

        if (subsetSum + nums[i] > subsetTarget) {
            return false;
        }
        if (!visited[i]) {
            visited[i] = true;

            subsets[curSubset].push(nums[i]);
            if (canPartitionKSubsetsUtils(nums, subsets, visited,
                subsetTarget, curSubset, i + 1)) {
                return true;
            }
            subsets[curSubset].pop();

            visited[i] = false;
        }
    }

    return false;
}

console.log(canPartitionKSubsets([1,1,1,1,1,3,4,10,11,15], 3));