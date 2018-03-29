/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function(nums) {
    var indexes = nums.map((num, index) => {
        return index;
    });
    indexes.sort((ind1, ind2) => {
        return nums[ind2] - nums[ind1];
    });

    indexes.forEach((index, ranking) => {
        switch(ranking) {
            case 0:
                nums[index] = "Gold Medal";
                break;
            case 1:
                nums[index] = "Silver Medal";
                break;
            case 2:
                nums[index] = "Bronze Medal";
                break;
            default:
                nums[index] = '' + (ranking + 1);
        }
    });

    return nums;
};

console.log(findRelativeRanks([5, 4, 3, 2, 1]));