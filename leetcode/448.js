/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    var results = [];
    nums.forEach((num) => {
        num = Math.abs(num);
        nums[num - 1] = nums[num - 1] > 0 ? -nums[num - 1] : nums[num - 1];
    });

    console.log(nums);
    
    for (var i = 1; i <= nums.length; ++i) {
        if (nums[i - 1] >= 0) {
            results.push(i);
        }
    }
    
    return results;
};

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]));